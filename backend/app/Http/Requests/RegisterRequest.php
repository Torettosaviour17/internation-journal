<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

   
    public function rules(): array
    {
        return [
        'fullName' =>'required|string|max:255',
        'email'=>'required|string|email||max:255|unique:users',
        'password'=>'required|string|min:8'
        ];
    }
}
