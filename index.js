var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('public/index.html');
});

app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('eTkh0BKyCCDp2wxjcW2xEXVzqTBUv3paYY_aepZb3YM.aSlo6fodsx3IxhSZiebSQCHJp8DIZyYfqxjLubxwee4)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
