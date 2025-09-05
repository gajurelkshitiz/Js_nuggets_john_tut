// TWO MAJOR PROBLEMS WITH THE CALLBACK FUNCTIONS:

// 1. CALLBACK HELL  = when there are multiple callbacks, i.e. nested many callbacks, this is callback hell.
// 2. INVERSION OF CONTROL  = when we pass a callback function to another function/library, then we `give up control`
//                              over how the callback is called. If the library is buggy or malicious, the callback might work differently.




// < ----------------------- EXAMPLE ----------------------------->

// function greet(name, callback) {

//     console.log('Hello, ' + name);
//     callback();
// }

// greet('Alice', function() {
//     console.log('Callback executed!');
// });


// < ----------------------- EXAMPLE ----------------------------->


// console.log('Start');

// setTimeout(function() {
//     console.log("Timeout Finished!");
// }, 2000);

// console.log("End");


// < ----------------------- EXAMPLE ----------------------------->

// Here, readFile is asynchronous. The callback runs after the file is read.



const fs = require('fs');

fs.readFile('file.txt', 'utf8', function(err) {
    if (err) {
        console.log("Error reading file: ", err);
        return;
    }
    console.log('File data: ', data);
})


// < ----------------------- EXAMPLE ----------------------------->



// TODO: NOTE: TO AVOID CALLBACK HTMLDataListElement, USE `PROMISE` AND `ASYNC/AWAIT`


// SUMMARY:
/*
1. Callback: Function passed into another function, often for async code.
2. Callback Hell: Too many nested callbacks, hard to read. 
3. Inversion of Control: You give another function to call your callback function, might get unexpected result.
4. Async Programming: Possible because JS uses callback and event loop.
*/