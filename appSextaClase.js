// let person = {
//     firstname: '',
//     lastname: '',
//     greet: function(){
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// let john = Object.create(person);

// john.firstname = 'John';
// john.lastname = 'Fornite';

// let dudette = Object.create(person);

// dudette.firstname = 'Bowser';
// dudette.lastname = 'Dudette';

// console.log(john.greet());
// console.log(dudette.greet());

//**********/Inheriting from the Event Emitter/****** */

let EventEmitter = require('events');
let utils = require ('util');

function Greetr(){
    this.greeting = 'Hewwoo UwU';
}

utils.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ' : ' + data);
    this.emit('greet', data);
}

let greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('SOMEONE HEWWOODED: ' + data);
});

greeter1.greet('John Fortnite');

//**********/Inheriting from the Event Emitter/****** */

let obj = {
    name: 'John Fortnite',
    greet: function(param){
        console.log(`Hewwo ${this.name}`);
    }
}

obj.greet();

//call and apply allow us to send params, whitch substitutes
//the varable this in the object function

obj.greet.call({name: 'John Fortnite'});
obj.greet.apply({name: 'Big Iron'});