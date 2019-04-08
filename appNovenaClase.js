let http = require('http');
let fs =require('fs');
http.createServer(function (req, res) {

    if(res.url === '/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200, { 'Content-Type' : 'application/json' });
        let obj = {
            firstname : 'John',
            lastname : 'Fortnite'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, 'localhost');