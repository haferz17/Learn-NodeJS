var fs=require('fs');
var mymod=require('./mymodul');

fs.appendFile('newfile.txt',mymod.jam(),function(err){
    if(err) throw err;
    console.log("Saved");
});
