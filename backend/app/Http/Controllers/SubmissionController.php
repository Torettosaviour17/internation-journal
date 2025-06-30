<?php
namespace App\Http\Controllers;

use App\Services\SubmissionService;
use App\Models\Submission;
use App\Http\Requests\StoreSubmissionRequest;
use Illuminate\Http\Request;

class SubmissionController extends Controller
{
    protected SubmissionService $service;

    public function __construct(SubmissionService $service)
    {
        $this->service = $service;

        $this->middleware('auth:sanctum');
    }

    public function store(StoreSubmissionRequest $request)
    {
        $this->service->createSubmission($request);

        return response()->json(['message' => 'Submission received successfully!']);
    }

    public function show($id)
    {
        $submission = $this->service->findUserSubmission($id);

        return response()->json($submission);
    }


    public function index()
{
    $submissions = $this->service->getUserSubmissions();

    return response()->json($submissions);
}


    public function update(Request $request, $id)
    {
        $submission = $this->service->updateSubmission($request , $id);

        return response()->json(['message' => 'Submission update Successful', 'submission' => $submission]);
    }

    public function destroy($id)
    {
        $this->service->deleteSubmission($id);

        return response()->json(['message' => 'Submission Deleted Successfully']);
    }

}
