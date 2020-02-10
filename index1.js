var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

var server = http.createServer(function(req,res){
    var pathObj = url.parse(req.url,true)
    console.log(pathObj)
    switch(req.url){
        case '/file':
            res.end(JSON.stringify({a:1,b:2}))
            break;
        case '/user/123':
            res.end(fs.readFileSync(__dirname+ "/anotherfile/c.html"))
            break;
        case '/':
            res.end(fs.readFileSync(__dirname+ "/sample/test.html"))
        default:
            try{
                res.end( fs.readFileSync(__dirname+ '/sample'+req.url))
            }catch(e){
                console.log('404')
                res.writeHead(404,'ha ha error')
                res.end('<h1>404 404 404</h1>')
            }
            
    }
     
   
})
server.listen(8080);
