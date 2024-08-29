const express = require("express");
const app = express();

app.get('/about', function (req, res) {
    res.send('About page');
})

app.get('/help', function (req, res) {
    res.send('Help page');
})

app.get('/', function (req, res) {
  res.send('Home page');
})

app.listen(4000, function() {
    console.log("The server is upon port 4000");
})
