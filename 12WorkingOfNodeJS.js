// How Node JS works?

// Call Stack
// Node APIs (Application Progaramming interface)
// CallBack Queue


// jo code jo kesi or language(C/C++) me likhi hai ho "Node API" wale block me
// we are inheriting them so thats why, they go to "Node API" block
// jab hum C/C++ wale libary se intract kar the hai ye oh hai
// do programming ke bitch me to interface hota hai us--> API  Doo language(C++ - Node)

console.log('Starting up');

setTimeout(() => {
    console.log('Two Seconds');
}, 2000);

setTimeout(() => {
    console.log('Zero Second');
}, 0);

console.log('Finishing Up');

// o/p-->  Starting up
//         Finishing Up
//         Zero Second
//         Two Seconds