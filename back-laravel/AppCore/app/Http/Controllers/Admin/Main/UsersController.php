<?php

namespace App\Http\Controllers\Admin\Main;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Validator;
use DB;
use App\User;

class UsersController extends Controller
{
	public function __construct()
    {
        $this->middleware('jwt');
    }

    public function getAttrByUser($user)
    {
        $user->main_image = null;
        $user->image = asset('storage').'/'.$user->image;
        $user->password2 = '';
        return $user;
    }

    public function getAllWithPagination(Request $request)
    {
        $clients = User::orderBy('name', 'ASC')->where($request->short_by, $request[$request->short_by])->paginate($request->per_page);
        foreach ($clients as &$user) {
            $user = $this->getAttrByUser($user);
        }
        return $clients;
    }

    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), $this->rules(), $this->messageValidation());
        if (!$validation->passes()) {
            return response()->json(['errors' => $validation->errors()], 400);
        }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);
        $user->is_active = $request->is_active;
        $user->email_verified_at = now();
        $user->save();

        /**
         * Guardar imagén principal
         */
        if ($request->hasFile('main_image')) {
            # code...
        } else if ($request->has('main_image')) {
            if (isset($request->main_image['dataURL'])) {
                $main_image = $request->main_image;
                $base_to_php = explode(',', $main_image['dataURL']);
                $data = base64_decode($base_to_php[1]);
                $name_img = $main_image['upload']['filename'];
                $ext = explode('.', $name_img);
                $ext = $ext[count($ext)-1];
                $name_main_image = 'user/profile-'.$user->id.'.'.$ext;
                $save_main_image = Storage::disk('public')->put($name_main_image, $data);
                if (!$save_main_image) {
                    return response()->json(['errors' => ['message' => 'Error Al guardar imagén']], 400);
                }
                $user->image = $name_main_image;
                $user->type_image = $main_image['type_image'];
                $user->size_image = $main_image['size_image'];
            } 
        }
        $user->save();
        return response()->json(['success' => '1', 'item' => $user]);
    }

	public function updateProfile(Request $request, $id)
	{
		$validation = Validator::make($request->all(), $this->rules($id), $this->messageValidation());
        if (!$validation->passes()) {
            return response()->json(['errors' => $validation->errors()], 400);
        }

        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;

        if ($request->change_password) {
        	$user->password = Hash::make($request->password);
        }

        /**
         * Guardar imagén principal
         */
        if ($request->hasFile('main_image')) {
            # code...
        } else if ($request->has('main_image')) {
        	if (isset($request->main_image['dataURL'])) {
        		$main_image = $request->main_image;
	            $base_to_php = explode(',', $main_image['dataURL']);
	            $data = base64_decode($base_to_php[1]);
	            $name_img = $main_image['upload']['filename'];
	            $ext = explode('.', $name_img);
	            $ext = $ext[count($ext)-1];
	            $name_main_image = 'user/profile-'.$user->id.'.'.$ext;
	            $save_main_image = Storage::disk('public')->put($name_main_image, $data);
	            if (!$save_main_image) {
	                return response()->json(['errors' => ['message' => 'Error Al guardar imagén']], 400);
	            }
                $user->image = $name_main_image;
                $user->type_image = $main_image['type_image'];
                $user->size_image = $main_image['size_image'];
        	}
            
        }
        $user->update();
        return response()->json(['success' => '1', 'item' => $user]);
	}

    public function destroy(Request $request, $id)
    {
        $user = User::find($id);
        $user->delete();

        return ['success' => '1'];
    }

	public function rules($id = '')
    {
        $rules = [
            'name' => ['required', 'string'],
            'email' => ['required', 'string', Rule::unique('users')->ignore($id)],
        ];
        return $rules;
    }

    public function messageValidation()
    {
        $messages = [
            'name.required' => 'El nombre debe ser definido.',
            'email.required' => 'El Correo electrónico debe ser definido.',
            'email.unique' => 'El Correo electrónico ya se encuentra registrado.'
        ];
        return $messages;
    }
}