const http = require('http');

// function rqListener(req,res){

// }

// http.createServer(rqListener);

// or

// http.createServer(function(req,res){

// });

// or

const server = http.createServer((req,res) => {
     console.log("sourav");
});

server.listen(4000);