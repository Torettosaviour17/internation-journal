<?php
namespace App\Services;

use App\Models\Submission;

use Illuminate\Http\Request;

class SubmissionService
{
  public function createSubmission(Request $request): Submission
    {
        $path = $request->file('manuscript')->store('manuscripts', 'public');

        return Submission::create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'authorName' => $request->authorName,
            'email' => $request->email,
            'manuscript_path' => $path,
            'message' => $request->message,
        ]);
    }

    public function findUserSubmission($id): Submission
    {
   return Submission::where('id' , $id)
   ->where('user_id' , auth()->id())
   ->firstOrFail();
    }

    public function getUserSubmissions()
    {
         return Submission::where('user_id', auth()->id())->get();
    }

    public function updateSubmission(Request $request, $id): Submission
    {
        $submission = $this->findUserSubmission($id);

        $submission->update($request->only([
            'title',
            'author_name',
            'email',
            'message',
        ]));

         if ($request->hasFile('manuscript')) {
            $path = $request->file('manuscript')->store('manuscripts', 'public');
            $submission->manuscript_path = $path;
            $submission->save();
        }

        return $submission;
    }
    public function deleteSubmission( $id): void
    {
         $submission = $this->findUserSubmission($id);
        $submission->delete();
    }
}