'use strict';

let EventEmitter = require('events');

class Greetr  extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hewwo ';
    }
    greet(name){
        console.log(`${this.greeting}: ${name}`);
        this.emit('greet', name);
    }
}


let greetr1 = new Greetr();

greetr1.greet('John Fornite');