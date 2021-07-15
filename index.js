var http = require('http');
var kq = http.createServer(xuly);
function xuly(req,res) {
    res.writeHead(200,{'Content-Type' :'text/plan '});
    res.end('<h1>{Hello world}c</h1>')
}
kq.listen(8081);