let server = require('ws').Server;
let s = new server({ port: 5001});

s.on('connection', function(ws) {
    ws.on('message', message => {
        console.log('Received:' + message);
        
        if (message == 'hello') {
            ws.send('Hello from the server :D');
        }
        else {
            ws.send(message + ' - Returned from the server')
        }
    })
})