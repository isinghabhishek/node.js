// Handeling Asynchronous Data in Node js

const { resolve } = require("path");

// 11HandelAsynchData

let a=10;
let b=0;

let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20);
    }, 2000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})