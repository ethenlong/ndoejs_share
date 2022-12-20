const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('hello')
}).listen(3000)
console.log('Server running at http://lcaolhost:3000');