const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('HELLO SIMPLE SERVER!');
});


app.listen(3000, function() {
  console.log('Listening on port: ' + port);
});
