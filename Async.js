// To use aysnc we use CallBacks (pass a function inside a function)

/* This is How callback works
1. The JavaScript runtime maintains a call stack, which is a stack data structure that keeps track of the functions being executed.
2. Asynchronous operations (e.g., AJAX requests, setTimeout, etc.) are handled by Web APIs provided by the browser or the runtime environment.
3. When an asynchronous operation is encountered, it is offloaded to a Web API, and a callback function is scheduled to be executed.
4. The event loop continuously checks the call stack and the callback queue.
5. When the call stack is empty, the event loop picks the first callback from the queue and pushes it onto the call stack.
6. The callback function is executed, and any synchronous code within it is processed.
7. If the callback contains additional asynchronous operations, their callbacks are scheduled similarly.
*/

const fs = require('fs');

function summation(number) {
    let sum = 0;
    for(let i = 1; i<= number; i++) {
        sum += i;
    }
    console.log(sum);
}

/* We require err param as this is a callback method 
and we could get some error while reading file */
function fileIsRead(err, fileContent) {
    if(err) {
        console.log("We have encountered some error");
    } else {
        summation(fileContent);
    }
}

// Once file is read, Then fileIsRead method is called. ---> Async call
// This will be added in the callback queue
fs.readFile('number.txt', 'utf8', fileIsRead);

// These will be added in the stack
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);