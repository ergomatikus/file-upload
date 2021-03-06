const http = require('http');
const fs = require('fs');
const spawn = require('child_process').spawn;


http.createServer(function(request, response){
   response.writeHead(200);
   request.pipe(response);
}).listen(8080);

const child = spawn('curl',['-d', 'Hello World!', 'http://localhost:8080']);

child.stdout.on('data', function(data){
    console.log(data.toString());
});

child.on('close', function (code) { 
    console.log("Finished with code " + code);
});
