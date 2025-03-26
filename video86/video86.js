// const { createServer } = require('node:http');

// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// import {a,b} from "./mymodule.js"
// console.log(a+b)


// import javed from "./mymodule.js"
// console.log(javed)


const a = require("./mymodule1")
console.log(a,__dirname,__filename)

// const b=require("./mymodule1")
// console.log(b)