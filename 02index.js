const Export = require('./03Export'); // 

var a=20;
let b=30;
const c=40;
console.warn(a+b+c);

// Diffrences b/w "==" && "==="
// "==" -> for value
// "===" -> for value and type both

// importing data from another file
// console.log(Export);
// console.log(Export.x); // importing indivisual values
// console.log(Export.z()); // importing function

// filter
// with help of filter function we can perform especific operation
// and it will return a new arr and we can store it.
const arr = [2, 6, 6, 8, 10, 12];
let result = arr.filter((item) => {
    return item*2;
})
console.warn(result);

// Nodemon
// helps in runing the coding in live-time
// by pressing ctrl+S code will be execute