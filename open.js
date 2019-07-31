var fs=require('fs');
fs.open('newfile2.txt','w+',function(err,file){
    if(err) throw err;
    fs.writeFile(file,'Pagi Teman2',(err)=>{
        console.log("saved");
    })
    fs.readFile(file,(err,data)=>{
        console.log(data.toString('utf8'));
    })
});
fs.rename('newfile2.txt','nf.txt',function(err){
    if(err) throw err;
    console.log("Renamed");
});
fs.unlink('nf.txt',function(err){
    if(err) throw err;
    console.log("Deleted");
})