var Movie  = require('/movie');
var moment = require('moment');

var days  = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];

var times  = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export var index = (function(req,res,next){

Movie.find().lean().exec(function(err,mv){

res.JSON(

{
movies : movies.map(function(err,movie){

({...movie,
days,
times,})

})

})

})

})


};