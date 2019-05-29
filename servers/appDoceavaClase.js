let express = require('express');
let app = express();
const mongoose = require('mongoose');
let port = process.env.PORT || 3000;
//CURLY BRACES MY MY MY


mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac');
let Schema = mongoose.Schema;

let personSchema = new Schema({
firstname: String
// lastName: String,
// address: String
});
let Person = mongoose.model('Person', personSchema);
app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>HeWWo JOhn Fornite</h1></body></html>');
});

app.get('/person/:id', function (req, res) {

let johnfortnite = Person({
    firstname: `${req.param.id}`
    // lastName: 'Fornite',
    // address: '420-69 Street'
});
johnfortnite.save(function (err) {
    if(err) throw err;
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});
})

app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Fornite'});
});

app.listen(port);