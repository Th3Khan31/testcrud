<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function __construct()
    {
    	$this->middleware('cors');
        $this->middleware('jwt', ['except' => ['login', 'register', 'verified']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return $this->respondWithToken($token, true);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me(Request $request)
    {
        $user = auth()->user();
        $user->image = $user->getUrlImage();
        $user->main_image = null;
        return response()->json($user);
    }

    public function verified(Request $request)
    {
        $token = $request->token;
        if ($token == null) {
            return response()->json(['error' => ['message' => 'Token Inalid']], 400);
        }
        try { 
            JWTAuth::setToken($token); //<-- set token and check
            auth('api')->setToken($token)->getPayload();
            if (! $claim = JWTAuth::getPayload()) {
                return response()->json(['error' => ['message' => 'user_not_found']], 400);
            }
            return $this->respondWithToken($token);
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['error' => ['message'=>'token_expired']], 404);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['error' => ['message' => 'token_invalid']], 404);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => ['message' => 'token_absent']], 404);
        }
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }
    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $login=false)
    {
        if ($login) {
            $user = auth()->user();
            $user->image = $user->getUrlImage();
        } else {
            $user = auth('api')->user();
            $user->image = $user->getUrlImage();
        }
    	
        return response()->json([
            'token_valid' => true,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => $user,
        ]);
    }
}