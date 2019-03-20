'use strict';

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log('HEWWO, ' + this.firstname + ' ' + this.lastname);
    }
}

let john = new Person('John', 'Fortnite');

john.greet();

Person.prototype.greet = function () {
    console.log('Hewwo, ' + this.firstname + ' ' + this.lastname);
};

let john = new Person('John', 'Fortnite');
john.greet();

let dudette = new Person('Dudette', 'Fortnite');
dudette.greet();

console.log(john._proto_);
