let http = require('http');
let fs =require('fs');
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type' : 'text/html' });
    let html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    let message = 'Quieres hospitalidad, ahi hay una lata de chinga tu madre, sirvete';
    html = html.replace('{Message}', message);
    res.end(html);
    res.end('Hello world\n');
    
}).listen(1337, 'localhost');