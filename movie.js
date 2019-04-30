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
});

var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var moment = require('moment');
var movieSchema = new Schema({
title : {type : String},
poster : {type : String},
genre : {type : String} 
});

module.exports = mongoose.model('movie',movieSchema);

/*var days = ['Today' , 'Tomorrow' , moment().add[2,'days'].format('ddd,MMM D')];
var times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];
Movie.find()
     .lean()
     .exec(function(err,movies){

if(err)
{
console.log(err);
}	

res.JSON({

movies : movies.map(function(err,cj){

if(err)
{
console.log(err);	
}	

({
...movie,
days,
times,

})
}) 
});
}); */
