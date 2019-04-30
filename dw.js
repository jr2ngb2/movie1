var express = require('express');
var aplw  =  express();	
var path = require('path');
var bodyParser  = require('body-parser')
var db1;
var mongoclient = require('mongodb').MongoClient;
mongoclient.connect('mongodb://dwql:dwql@ds133358.mlab.com:33358/jw',function(err,dbjw){
if(err)
{
return console.log(err);
}
db1 = dbjw;

aplw.listen(8081,function(){
console.log("connect1");	
});
});

aplw.get('/',function(req,res){
console.log("get1");
if(req)
{
console.log("get1")	
}
res.sendFile(__dirname + '/wq.html');
});

aplw.get('/d',function(req,res){
console.log("get1");
res.send("y1");
});
aplw.use(bodyParser.urlencoded({extended:true}))
aplw.post('/q1',function(req,res){
console.log(req.body);	
db1.collection('q1').save(req.body,function(err,result){
if(err)
{
return console.log(err);	
}
console.log('save');
res.redirect('/');
});
var username = req.body.t1;
var password = req.body.q1;
db1.collection('q1').findOne({'t1':username,'q1':password},function(err,dz){

if(err)
{
console.log('error1');
}	
console.log('found');
});
});

db1.collection('mov1').save({'movie':w1},function(err,dz){

if(err)
{
console.log('error1');
}	
console.log('found');
});
