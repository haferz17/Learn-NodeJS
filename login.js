var http=require('http');
var qs=require('querystring');
var fs=require('fs');

http.createServer(function(req,res){
    if(req.url==="/"&&req.method==="GET"){
        fs.readFile('login.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(req.url==="/login"&&req.method==="POST"){
        var reqbody='';
        req.on('data',function(data){
            reqbody+=data;
        });
        req.on('end',function(){
            var fd=qs.parse(reqbody);
            res.writeHead(200,{'Content-Type':'text/html'});
            if(fd.uname==="rizqi"&&fd.pass==="12345"){
                res.write("Berhasil Login");
            }
            else{
                res.write("Gagal Login");
            }
            res.end();
        });
    }
}).listen(8888);
console.log("running on 8888");