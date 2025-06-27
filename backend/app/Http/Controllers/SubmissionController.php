<?php
namespace App\Http\Controllers;

use App\Models\Submission;
use App\Http\Requests\StoreSubmissionRequest;
use Illuminate\Http\Request;

class SubmissionController extends Controller
{
    public function store (StoreSubmissionRequest $request)
    {
 $path = $request->file('manuscript')->store('manuscripts', 'public');

    Submission::create([
        'title' => $request->title,
        'author_name' => $request->authorName,
        'email' => $request->email,
        'manuscript_path' => $path,
        'message' => $request->message,
    ]);

    return response()->json(['message' => 'Submission received successfully!']);
    }
}
