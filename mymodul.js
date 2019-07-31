var tgl=require('moment');
exports.salam=function(){
    return "Selamat Pagi Tanggal "+tgl().format("dddd,DD MMMM YYYY");
}
exports.jam=function(){
    return "Selamat Pagi Jam "+tgl().format("hh:mm:ss");
}