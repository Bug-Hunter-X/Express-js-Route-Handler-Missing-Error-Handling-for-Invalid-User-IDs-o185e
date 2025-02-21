# Express.js Route Handler Missing Error Handling for Invalid User IDs

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input, leading to unexpected 500 Internal Server Errors instead of appropriate 404 Not Found errors.

## Bug Description
The `/users/:id` route fetches a user based on the provided ID. However, it lacks error handling for cases where the `userId` is not a number or is invalid, leading to a runtime error. This causes Express.js to return a generic 500 Internal Server Error, which is not informative for the client.

## Bug Solution
The solution involves adding proper error handling to check if the `userId` is valid and if a user with that ID exists. If not, a 404 Not Found error should be returned.

## How to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`.
3. Run the server: `node bug.js`.
4. Make a request to `/users/abc` or `/users/12345` (if 12345 doesn't exist).

You will see a 500 error. Then run `node bugSolution.js` and test again. 
