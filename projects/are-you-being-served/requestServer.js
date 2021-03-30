// requestServer.js file
const http = require('http');
const request = require('request')
const args = process.argv.slice(2);
var port = 8686;

const server = http.createServer(function(req,res){
var url = args[0] ? args[0] :"http://www.google.com"



request(url, function(err, response, body){
    if(!err && response.statusCode === 200){
        res.writeHead(200,{'Content-type': ' text/html'})
        res.write(body)
        console.log("running");
        res.end();
    } else {
        res.writeHead(response.statusCode,{'Content-type': 'text/plain'})
        res.write(err.toString());
        
    }
    res.end ();
})

});

server.listen(port);