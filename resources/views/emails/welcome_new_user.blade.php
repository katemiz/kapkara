<!DOCTYPE html>
<html>

<head>
    <style>
        .button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
        }

        .password-box {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px dashed #ccc;
            font-family: monospace;
            font-size: 1.2em;
        }
    </style>
</head>

<body>
    <h1>Welcome, {{ $user->name }}!</h1>
    <p>An account has been created for you on <strong>{{ config('app.name') }}</strong>.</p>

    <p>Your login credentials are:</p>
    <ul>
        <li><strong>Email:</strong> {{ $user->email }}</li>
    </ul>

    <p>Your temporary password is:</p>
    <div class="password-box">
        {{ $password }}
    </div>

    <p>For security reasons, we recommend logging in and changing your password immediately.</p>

    <p>
        <a href="{{ url('/login') }}" class="button">Login to your Account</a>
    </p>

    <p>Best regards,<br>The {{ config('app.name') }} Team</p>
</body>

</html>