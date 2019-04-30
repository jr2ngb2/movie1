var fs = require("fs");
var data = "";
var rw = fs.createReadStream('ks.txt');
rw.setEncoding('UTF8');
rw.on("data",function(chunk){
data =  data+chunk;
});

rw.on("end" , function(){
console.log(data);
});

rw.on("error",function(err){

console.log(err.stack);
});
var wt = fs.createWriteStream("ks.txt");
var i = 0;
var dl = " ";
for(i>=0;i<10;i++)
{
dl = dl+"rt on egkw" + "     ";
}
wt.write(dl,"UTF-8");
wt.end();
wt.on("finish",function(){

console.log("write done");	
})

wt.on("error",function(err){
console.log(err.stack);
});

var wj = fs.createWriteStream("wk.txt");
var sq = fs.createReadStream("ks.txt");
sq.pipe(wj);
console.log("p r");
var zlib = require("zlib");
fs.createReadStream("ks.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("ks.txt.gz")); 

fs.stat("wk.txt",function(err,stats){

if(err)
{

console.log(err);	
}
console.log(stats);
console.log("f in");
console.log("isFile ?" + stats.isFile());
console.log("isDirectory" + stats.isDirectory());

});  

console.log("od fi");
console.log("lw");
var j = 0;
var brw = new Buffer(26);
for(j>=0;j<26;j++)
{
brw[j] = j+97;
}
console.log(brw.toString('ascii'));
brw.write("wq")

var express = require('express');
var appq = express();
appq.get('/',function(req,res){
res.send("lp jl");
});
appq.get("/jl",function(req,res){

if(req){
console.log("lt");	
}
else{
console.log("wl");	
}
res.send("kw kl");	
});

var server = appq.listen(8081,function(){

var host = server.address().address;
var port = server.address().port;
console.log("app listening at http://%s:%s",host,port)

});

var blw = new Buffer(1024);
fs.open("wk.txt","r+",function(err,fd){

fs.read(fd,blw,0,blw.length,0,function(err,bw){


});

var session = require("express-session");
appq.use(session({
resave :true,
saveUninitialized : true,
secret : "2RTYLKP"
}));
appq.get("/login",function(req,res){
if(!req.query.username === "alw" || !req.query.password === "kjwq")
{
res.send("login invalid");

}
else if(req.query.username === "alw" && req.query.password === "kjwq"){

req.session.user = "alw";
req.session.admin = true;	
res.send(req.session.user);
}

else{

res.sendStatus(401);

}
});
var awj = function(req,res,next){

if(req.session && req.session.user == "alw" &&req.session.admin)
	return next();
    else{

    return res.sendStatus(401);	
    }

};


});

var http = req("http");
http.createServer(function(req,res){

if(req){
console.log("gtkw");

}
res.writeHead(200,{})
});