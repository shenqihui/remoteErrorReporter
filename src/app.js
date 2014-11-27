var express = require('express');
var app = express();


app.set('trust proxy', 'loopback') // specify a single subnet
app.set('trust proxy', 'loopback, 123.123.123.123') // specify a subnet and an address
app.set('trust proxy', 'loopback, linklocal, uniquelocal') // specify multiple subnets as CSV
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']) // specify multiple subnets as an array

app.set('trust proxy', function (ip) {
  if (ip === '127.0.0.1' || ip === '123.123.123.123') return true; // trusted IPs
  else return false;
})

app.set('etag', function (body, encoding) {
  return generateHash(body, encoding); // consider the function is defined
})

app.set('title', 'My Site');
app.get('/title'); // "My Site"

app.get('/', function(req, res){
  res.send('hello world');
});


app.use('/abcd', function (req, res, next) {
  next();
})

app.listen(3000);