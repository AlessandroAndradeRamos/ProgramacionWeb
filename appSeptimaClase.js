let util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Fortnite';
}

Person.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);    
}

function Policeman() {
    Person.call(this);
    this.badgeNumber = '1234';
}

util.inherits(Policeman, Person);

let officer = new Policeman();
officer.greet();

Person.call