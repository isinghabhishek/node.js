// OS Module NodeJS
const os = require('os');
// console.log(os);
// console.log(os.arch()); // 64-bit 32-bit
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname()); // system name
console.log(os.platform());
console.log(os.userInfo());