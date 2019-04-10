let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
//CURLY BRACES MY MY MY
app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>HeWWo JOhn Fornite</h1></body></html>');
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
})

app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Fornite'});
});

app.listen(port);