const express = require('express');
const mongoose = require('mongoose');
let app = express();

mongoose.connect('mongodb://test89:test89@ds251632.mlab.com:51632/addressbookaz');

let Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: String,
    lastName: String,
    address: String
});

let Person = mongoose.model('Person', personSchema);

let johnfortnite = Person({
    firstname: 'John',
    lastName: 'Fornite',
    address: '420-69 Street'
});

johnfortnite.save(function (err) {
    if(err) throw err;

    console.log('person saved !');
});