<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;
use Inertia\Inertia; // Don't forget this import!

use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\LogoutResponse;

class FortifyServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Bind the Interface to the Action class
        $this->app->singleton(
            \Laravel\Fortify\Contracts\CreatesNewUsers::class,
            CreateNewUser::class
        );
    }

    public function boot(): void
    {
        // 1. Tell Fortify to use Inertia for the views
        Fortify::loginView(function () {
            return Inertia::render('Auth/Login');
        });

        Fortify::registerView(function () {
            return Inertia::render('Auth/Register');
        });

        Fortify::requestPasswordResetLinkView(function () {
            return Inertia::render('Auth/ForgotPassword');
        });

        Fortify::resetPasswordView(function ($request) {
            return Inertia::render('Auth/ResetPassword', [
                'token' => $request->route('token'),
                'email' => $request->email,
            ]);
        });

        Fortify::verifyEmailView(function () {
            return Inertia::render('Auth/VerifyEmail');
        });

        Fortify::createUsersUsing(CreateNewUser::class);

        // 2. Configure Rate Limiting (Standard Fortify setup)
        RateLimiter::for('login', function (Request $request) {
            $email = (string) $request->email;
            return Limit::perMinute(5)->by($email.$request->ip());
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });


        // 3. Custom Login and Logout Responses to handle redirection based on 'sayfa' parameter

        $this->app->instance(LoginResponse::class, new class implements LoginResponse {
            public function toResponse($request) {
                $target = $request->input('redirect_to');

                // If sayfa was passed and looks like a valid path, go there
                if ($target && str_starts_with($target, '/')) {
                    return redirect($target);
                }

                return redirect()->intended('/');
            }
        });




        // this is for logout redirection. We check if a 'sayfa' parameter was sent with the logout request, and if so, we redirect to that sayfa's login page. Otherwise, we go to the default module page.

        $this->app->instance(LogoutResponse::class, new class implements LogoutResponse {
            public function toResponse($request) {
                // Check if we passed a specific module to redirect to
                $module = $request->input('sayfa', '');

                // Redirect straight to the login page with the module parameter
                return redirect("/$module");
            }
        });







    }
}
