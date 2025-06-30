<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSubmissionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'authorName' => 'required|string',
            'email' => 'required|email',
            'manuscript' => 'required|file|mimes:pdf,doc,docx',
            'message' => 'nullable|string',
        ];
    }
}
