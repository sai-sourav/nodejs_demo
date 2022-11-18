const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    //  console.log("sourav");
    //  process.exit();
    // console.log(req.headers);
    // console.log("///////////////////////////");
    // console.log(req.url);
    // console.log(req.method);
    // console.log("-end-");
    const method = req.method;
    if(req.url === "/"){
        res.write('<html>');
        res.write('<head><title> Enter message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>send</button></body>')
        res.write('</html>');
        return res.end();
    }

    if (req.url === "/message" && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
        }) //new chunk ready to be read
        return req.on('end', () => {
           const parsedBody = Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
        //    fs.writeFile('message.txt',message, err => {
        //         res.statusCode = 302;
        //         res.setHeader('Location','/');
        //         return res.end();
        //    });
           res.write(`<body><form action="/message" method="POST"><p>${message}</p><input type="text" name="message"><button>send</button></body>`);
           return res.end();
        })   
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> my first page </title></head>');
    res.write('<body><h1>Welcome to my Node Js project message page</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);