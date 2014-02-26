
var PeerServer = require('peer').PeerServer;
var port = 9000;
var interval = 60000;

var server = new PeerServer({ port: port });

console.log('server: running on http://127.0.0.1:' + port);

server.on('connection', function(client) { 
    console.log("server: %s connected", client.id);
    setInterval( 
        function() { 
            var rand = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
            var message = 'hello world ' + rand;
            console.log("server: sending message: %s", message);
            try { // client might have disconnected
                client.socket.send(JSON.stringify({ type: 'MEZZY', payload: message }));
            }
            catch(e) {
                console.error(e);
            }
        },
        interval
    );
});

server.on('disconnect', function(data) { 
    console.log("server: %s disconnected", data.id);
});
