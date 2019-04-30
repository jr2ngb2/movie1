var express = require('express');
var aplw  =  express();	
var path = require('path');
var bodyParser  = require('body-parser')
var db1;
var mongoose = require('mongoose');
var mongoclient = require('mongodb').MongoClient;

mongoclient.connect('mongodb://dwql:dwql@ds133358.mlab.com:33358/jw',function(err,dbjw){
if(err)
{
return console.log(err);
}
db1 = dbjw;

aplw.listen(8080,function(){
console.log("connect1");	
});

var movq = [
{
"title" : "La La Land",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Paterson",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Jackie",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Lo and Behold Reveries of the Connected World",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "10 Cloverfield Lane",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Birth of a Nation",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "De Palma",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Doctor Strange",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Eddie the Eagle",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Pride and prejudice and zombies",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Finding Dory",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Green Room",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Kubo and the Two Strings",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "In a Valley of Violence",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "O.J.: Made in America",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
"title" : "Rogue One: A Star Wars Story",
"days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],
},

{
    title: 'Sing Street',
    "days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],

  },
  {
    title: 'Zoolander 2',
    "days"  : ["Today" ,"Tomorrow" , "Next Day"],
"Time"  : [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ],

  },
];

db1.collection('tim1').insertMany((movq),function(err,rq){

if(err)
{
console.log(err);	
}

if(rq)
{
console.log("tim1 in");	
}
});

});
