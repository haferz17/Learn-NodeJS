var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function (req,res) {
    fs.readFile('index.html',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        var x=req.url.split('?');
        if(x[0]=="/search"){
            var y=url.parse(req.url,true).query;
            res.write("Hasil pencarian dari = "+y.key);
        }
        else{
            res.write(data);
        }
        res.end();
    });
}).listen(8000);
console.log("running on 8000");