const fs = require('fs');
const routeserver = (req,res) => {
    const method = req.method;
    if(req.url === "/"){
        fs.readFile('message.txt',(err,data) => {
            if (err){
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title> Enter message </title></head>');
            res.write(`<body><form action="/message" method="POST"><p>\n${data}</p><input type="text" name="message"><button>send</button></body>`)
            res.write('</html>');
            return res.end();
        })
        
    }

    else if (req.url === "/message" && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{    //new chunk ready to be read
            body.push(chunk);
        })
        return req.on('end', () => {  // no chunk is available to read
           const parsedBody = Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
           fs.writeFile('message.txt'," "+message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
           });
        })   
    }
    // fast forward code
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title> my first page </title></head>');
    // res.write('<body><h1>Welcome to my Node Js project message page</h1></body>');
    // res.write('</html>');
    // res.end();
}

// module.exports = routeserver;
// module.exports = {
//     handler: routeserver,
//     sometext: 'some hard coded text'
// }

exports.handler = routeserver;
exports.sometext = 'some hard coded text';