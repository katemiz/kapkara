<?php

namespace App\Http\Middleware;

use App\Models\Organization;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfNotInstalled
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->routeIs('setup.*') && !Organization::query()->exists()) {
            return redirect()->route('setup.create');
        }

        return $next($request);
    }
}