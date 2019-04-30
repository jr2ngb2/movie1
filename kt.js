/*var https = require('https');
var MovieFone = require('moviefone');
moviefone = new MovieFone('10001',null);

moviefone.getNewReleases().then(response => { console.log(response);
                                            
});                 
moviefone.getNewReleases().catch(err => {console.log(err);}); */

var Findango = require('findango-api')
 
Findango.find({
  zipCode: '94107'
}).then(theatres => {
  // Theatres have the format: 
  // { 
  //  name: '…',              // Name of theatre 
  //  location: '…',          // Theatre address 
  //  films: [{ 
  //    title: "Movie Title"  // Title of film 
  //    url: '…'              // Fandango URL for showtimes 
  //  }] 
  // } 
  renderApp(theatres);
});

