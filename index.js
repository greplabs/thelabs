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

app.get('/.well-known/acme-challenge/ZTUQWDgI1HHPdaE3_THeuGpzdAblbK6OKcHvpTYM2lo', function(req, res) {
  res.send('ZTUQWDgI1HHPdaE3_THeuGpzdAblbK6OKcHvpTYM2lo.aSlo6fodsx3IxhSZiebSQCHJp8DIZyYfqxjLubxwee4')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
