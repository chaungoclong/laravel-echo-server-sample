<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(): View
    {
        return view('welcome');
    }

    public function store(Request $request): void
    {
        $message = (string)$request->input('message');
        broadcast(new MessageSent($message));
    }
}
