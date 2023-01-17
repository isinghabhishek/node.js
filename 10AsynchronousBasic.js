// Asynchronous and Synchronous

// in synchronous operation tasks are performed one at a time
//   Users...       Products...        Cities...

// In Asynchronous, second Task do not wait to finish First Task
//   Users...
//                 Products...
//                                   Cities...

// node .\10AsynchronousBasic.js
console.log("start exe...");

setTimeout(()=>{
    console.log("logic exe...")
}, 2000);

console.log("complete exe...");


// Drawback
let a=10;
let b=0;

setTimeout(()=>{
    b=20;
}, 2000);

console.log(a+b);