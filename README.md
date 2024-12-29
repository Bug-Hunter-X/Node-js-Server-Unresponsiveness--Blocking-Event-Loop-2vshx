# Node.js Server Unresponsiveness: Blocking Event Loop

This repository demonstrates a common Node.js issue: blocking the event loop with a long-running operation in a request handler. This leads to the server becoming unresponsive to new requests.

## Problem

The `server.js` file contains a simple HTTP server. However, the request handler includes a `while` loop that keeps the CPU busy for 5 seconds.  During this time, the event loop is blocked, preventing the server from accepting or processing new requests. This results in unresponsiveness and potential timeouts for clients.

## Solution

The `serverSolution.js` file demonstrates how to address this issue using asynchronous operations.  The long-running task is moved to a separate function utilizing `setTimeout` for non-blocking execution. This prevents the event loop from being blocked, ensuring the server remains responsive.

## How to run

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `node server.js` (for the problematic code) or `node serverSolution.js` (for the solution).