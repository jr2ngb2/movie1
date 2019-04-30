var http = require('http');
http.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'text/html'});
res.end('Yellow is yol');
}).listen(8080);

var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
app.get('/lt',function(req,res){
    
    res.send(C:\Users\Neelendu\Desktop\lt.html);
});
app.listen(3000);   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ngbs007@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'ngbs007@gmail.com',
  to: 'neelendu.wadhwa17@rediffmail.com',
  subject: 'Yo',
  text: 'lp'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
