const http = require('http');

unknownVariable = 100;

const server = http.createServer((req,res)=>{
    res.end("Hello from ECS");
});

server.listen(3000);
