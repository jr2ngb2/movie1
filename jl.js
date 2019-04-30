/*var dw = require('moviefone');
dw.MovieFone('63109',function(err,wq){

if(err)
{
console.log(err);
}
console.log(wq);
});
var Showtimes = require('showtimes');
var q1 = new Showtimes(89014,{});

q1.getTheaters(89014,function(err,tht){
if(err)
{
console.log(err);	
}
console.log(tht);
});*/

var qw = require('findango-api')

qw.find({zipCode : '94107'},function(err,ct){

if(err)
{
console.log(err);	
}

renderApp(ct);
console.log(ct);

});