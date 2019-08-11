var express = require('express');
var app = express();
const url = require('url');


app.set("view engine","ejs");


app.get('/', function (req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get('/404', function (req, res) {
  res.sendfile(__dirname + "/404.html");
});

app.get('/:site?/', function(req, res){
  var Url = req.url;
  var parseUrl = url.parse(Url,true,true);

  var params = {};
   params.one=("Search: " + parseUrl.search);
   params.two=("HREF: " + parseUrl.href);

   params.three=("Parametrs: " + (JSON.stringify(parseUrl.query)));

  let newString = params.one + "<br><br>" + params.two + "<br><br>" + params.three;

  
  res.send(newString);

});

app.listen(3000, function () {
  console.log('Сервер работает на порту : 3000!');
});
