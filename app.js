const http = require('http');

// function rqListener(req,res){

// }

// http.createServer(rqListener);

// or

// http.createServer(function(req,res){

// });

// or

const server = http.createServer((req,res) => {
    //  console.log("sourav");
    //  process.exit();
    console.log(req.headers);
    console.log("///////////////////////////");
    console.log(req.url);
    console.log(req.method);
    console.log("-end-");
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> my first page </title></head>');
    if (req.url === "/home"){
        res.write('<body><h1>Welcome Home</h1></body>')
    }
    else if (req.url === "/about"){
        res.write('<body><h1>Welcome to About Us page</h1></body>')
    }
    else if (req.url === "/node"){
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    }else{
        res.write('<body><h1>Hello from my Node Js server!</h1></body>')
    }
    res.write('</html>');
    res.end();
});

server.listen(4000);