var express = require('express');
var aplw  =  express();	
var path = require('path');
var session = require('express-session');
var bodyParser  = require('body-parser');
var db1;
var vl = 0;
var wq = require('cookie-session');
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

/*var mongoStore = require('connect-mongo')({

session : session	
});
var cookieExpiration = 30*(24*60*60*1000);
aplw.use(session({

saveUninitialized : false,
resave : true,
cookie : {

path : '/login',
secure : false,
httpOnly : false,
domain : 'localhost:8081',
maxAge : cookieExpiration	
},
name : 'qw',
secret : 'wqsrtwt',
store : new mongoStore({

url : 'mongodb://dwql:dwql@ds133358.mlab.com:33358/jw',
collection : 'sq'

})

}));*/

aplw.use(wq({

saveUninitialized : false,
resave : true,
cookie : {

path : '/login',
secure : false,
httpOnly : false,
domain : 'localhost:8081',
},
name : 'qw',
secret : 'wqsrtwt',
}));

aplw.get('/',function(req,res){

var ses1 = req.session;
console.log(req.body);
console.log("get1");
if(req)
{
console.log("get1")	
}
res.sendFile(__dirname + '/wd.html');
console.log(ses1);
});

aplw.get('/d',function(req,res){
console.log("get1");
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

/*exports.movw = function(err,hl){

db1.collection('mov1',function(err,kw){

if(err)
{
console.log(err);	
}	
kw.find({}).toArray(function(err,dl){

if(err)
{
console.log(err);	
}	
var i = dl.length;
});
});	
};
aplw.get('/movies',function(req,res){

exports.get = function(req,res){

movw(function(err,tq){

if(err)
{
console.log("err in list");	
}
var kw = "";
 res.writeHead(200, {
        'Content-Type': 'text/html'
      });


for (i>= 0;i<movw.count;i++) 
{
kw = kw + "<div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src=" + movw. alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Item One</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>  

}
});


}	
});*/

aplw.get('/reg',function(req,res){
aplw.use(bodyParser.urlencoded({extended:true}))
res.sendFile(__dirname + '/signup.html');
var post = req.body;
var us1 = post.username;
var psw1 = post.password;	

db1.collection('user').save(req.body,function(err,rw){

if(err)
{
console.log(err);	
}
console.log(req.body);
});
});	

aplw.post('/signup',function(req,res){
aplw.use(bodyParser.urlencoded({extended:true}))
var post = req.body;
var us1 = post.username;
var psw1 = post.password;	
var ses1 = req.session;
db1.collection('user').save(req.body,function(err,rw){

if(err)
{
console.log(err);	
}
console.log(req.body);
res.redirect('/');
});
});	


aplw.get('/login',function(req,res){
res.sendFile(__dirname + '/login.html');
console.log('in log1');
console.log(req.session);
aplw.use(bodyParser.urlencoded({extended:true}))
var post = req.body;
var us1 = post.username;
var psw1 = post.password;	

});	

aplw.post('/login',function(req,res){
console.log('in log1');
aplw.use(bodyParser.urlencoded({extended:true}))
var post = req.body;
var us1 = post.username;
var psw1 = post.password;	
var ses1 = req.session;
ses1.user = us1;
db1.collection('user').findOne({'username' : us1 , 'password':psw1},function(err,rw){

if(err)
{
console.log(err);	
}
if(!rw)
{
console.log('wrong cred');	
res.sendFile(__dirname + '/signup.html');
}
if(rw)
{	
console.log(req.body);
console.log('logged in');
console.log(ses1.user);
res.sendFile(__dirname + '/index.html');
}
});
});	


aplw.post('/tickq' , function(req,res){
console.log(req.body);
vl = vl+1;
db1.collection('ticket').save(req.body,{'id': vl},function(err,rw){
if(err)
{
console.log(err);	
}
console.log('booked');
res.send(req.session.user);

});
});
aplw.get('/name',function(req,res){

var ses1 = req.session;
console.log(ses1.user);
res.send(ses1.user);

});

aplw.get('/mov',function(req,res){

db1.collection('mov1').find().toArray(function(err,rw){
if(err)
{
console.log(err);	
}

if(rw)
{
console.log(rw);
res.json(rw);	
}
});
});

aplw.post('/mvbook',function(req,res){
console.log('in log1');
aplw.use(bodyParser.urlencoded({extended:true}))
console.log(req.body);
console.log(req.body.Movie)
req.session.movie = req.body.Movie;
res.sendFile(__dirname + '/tk.html');
});
/*db1.collection('user').findOne({'username' : us1 , 'password':psw1},function(err,rw){
if(err)
{
console.log(err);	
}
if(!rw)
{
console.log('wrong cred');	
res.sendFile(__dirname + '/signup.html');
}
if(rw)
{	
console.log(req.body);
console.log('logged in');
console.log(ses1.user);
res.sendFile(__dirname + '/index.html');
}
});
});*/	
aplw.get("/qp",function(req,res){

console.log(req.session.movie);
db1.collection('tim1').findOne({"title":req.session.movie},function(err,lw){

console.log(lw);
res.json(lw);


});

});

aplw.post('/bktm',function(req,res){

console.log(req.body);
req.session.time = req.body.Time;
db1.collection('tk1').save({"USER":req.session.user , "MOVIE":req.session.movie , "TIMING" : req.session.time },function(err,wq){

if(err)
{
console.log(err);	
}
res.sendFile(__dirname + '/lq.html');
});
});

aplw.use(bodyParser.urlencoded({extended:true}));
aplw.post('/sw',function(req,res){

console.log(req.body);
req.session.seat = req.body.seat;
db1.collection("tkb1").save({"user":req.session.user,"seat":req.body.seat,"movie":req.session.movie,"time":req.session.time},function(err,tj){

if(err)
{
console.log(err);	
}
});
});

aplw.use(bodyParser.urlencoded({extended:true}))

aplw.post('/rq',function(req,res){
console.log("Processing...");
res.sendFile(__dirname + '/pay1.html');

});
aplw.use(bodyParser.urlencoded({extended:true}));

aplw.post("/py",function(req,res){

console.log(req.body);
console.log("processing");
console.log("BOOKED");
res.sendFile(__dirname + '/ticket1.html');

});

aplw.get("/tkb4",function(req,res){

console.log("in tkb1");
var tw = {"user":req.session.user,"seat":req.session.seat,"movie":req.session.movie,"time":req.session.time};
res.json(tw);

});

aplw.get("/logout",function(req,res){

req.session = null;
res.send("logged out");
});
