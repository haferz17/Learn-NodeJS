var http=require('http');
var fs=require('fs');
var fm=require('formidable');
var mv=require('mv');

http.createServer(function(req,res){
    if(req.url==="/"&&req.method==="GET"){
        fs.readFile("upload.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            if(err) throw err;
            res.end(data);
        });
    }
    if(req.url==="/"&&req.method==="POST"){
        var form=new fm.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldpath=files.ftu.path;
            var newpath=__dirname+"/file/"+files.ftu.name;
            mv(oldpath,newpath,function(err){
                if(err) throw err;
                console.log('upload success');
                res.end("Upload Success");
            });
        });
    }
}).listen('8000');
console.log("running on 8000");