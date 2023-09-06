var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2> JESTESMY ZAWSZE TAM, GDZIE NASZ KSik GRA, AAAEE AAAOOO CHWASZCZYNO GOLL</h2>');
    res.end('Adres IP klienta' + req.socket.remoteAddress);
}).listen(8080);