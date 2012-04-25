require('http').createServer(function (req, res) {
    var a = "hollo"
    var b = 2
    res.end(a+b+"\nHello world\n");
}).listen(8001);
