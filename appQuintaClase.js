//object properties and methods
let obj = {
    greet : 'YO SI QUE ME ALEGRO'
}

console.log(obj.greet);
console.log(obj['greet']);
let prop = 'greet';
console.log(obj[prop]);

let arr = [];
arr.push(function(){
    console.log('Hola Vivaldi');
});
arr.push(function(){
    console.log('Hola John Fornite');
});
arr.push(function(){
    console.log('Hola MUCHAHOS');
});

arr.forEach(function(item){
    item();
});

//Emitter

// let Emitter = require('./emitter');

// let emtr = new Emitter();

// emtr.on('greet', function(){
//     console.log('SOMEONES DONE F. UP');
// });

// console.log('HEWWO uwu');
// emtr.emit('greet');

//NativeEmitter

// let Emitter = require('events');

// let emtr = new Emitter();

// emtr.on('greet', function(){
//     console.log('SOMEONES DONE F. UP');
// });

// console.log('HEWWO uwu');
// emtr.emit('greet');

//Bettergreating

let Emitter = require('events');

let emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('SOMEONES DONE F. UP');
});

console.log('HEWWO uwu');
emtr.emit('greet');