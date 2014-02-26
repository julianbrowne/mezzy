
var content = require('node-static');
var http = require('http');
var port = 9001;

var file = new(content.Server)('public');

var handler = function(request, response) { 
    file.serve(request, response, function (err, res) { 
        if (err) { 
            console.error("ERROR: Problem serving " + request.url + " - " + err.message);
            response.writeHead(err.status, err.headers);
            response.end();
        }
        else {
            // console.log("> " + request.url + " - " + res.message);
        }
    });
};

var server = http.createServer(handler);

server.listen(port);

console.log('Open browser to http://127.0.0.1:' + port);
