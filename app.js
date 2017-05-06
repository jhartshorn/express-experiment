var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
//app.use(express.urlencoded());
app.use(express.static('public'));

app.post('/handler', function (req, res){
  if (req.body.message == "liz")
    res.send('Hello  '  + req.body.message + ' xxx');
  else
    res.send('Hello  '  + req.body.message);

  console.log(req.body.message);
});

app.listen(80, function () {
  console.log('App listening on port 8000');
});

