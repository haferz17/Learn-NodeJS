var http=require('http');
var tgl=require('moment');
var url=require('url');
var mymodul=require('./mymodul');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    var x=req.url.split("?");
    if(x[0]=="/tes"){
        var a=url.parse(req.url,true).query;
        if(a.key){
            res.write("ini halaman "+a.key);
        }
        else{
            res.write("ini halaman "+req.url);
        }
    }
    else{
        res.write("404");
    }
    res.end();
}).listen(8080);
console.log(mymodul.salam());