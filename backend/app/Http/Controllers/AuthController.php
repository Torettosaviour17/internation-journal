<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'fullName'     => $request->fullName,
            'email'    => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message'      => 'User registered successfully.',
            'access_token' => $token,
            'token_type'   => 'Bearer',
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message'      => 'Login successful.',
            'access_token' => $token,
            'token_type'   => 'Bearer',
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logout successful.']);
    }

    public function forgotPassword(ForgotPasswordRequest $request)
{
    $token = app('auth.password.broker')->createToken(
        User::where('email', $request->email)->firstOrFail()
    );

    return response()->json([
        'message' => 'Password reset token generated.',
        'reset_token' => $token,
    ]);
}
   public function resetPassword(ResetPasswordRequest $request)
{
    $user = User::where('email', $request->email)->firstOrFail();

    if (!app('auth.password.broker')->tokenExists($user, $request->token)) {
        return response()->json(['message' => 'Invalid or expired token.'], 400);
    }

    $user->forceFill([
        'password' => Hash::make($request->password),
    ])->save();

    return response()->json(['message' => 'Password reset successful.']);
}
}


