var http=require('http');
http.createServer(function(req,res){
    res.end("Halaman server");
}).listen(8000);
console.log("running 8000");