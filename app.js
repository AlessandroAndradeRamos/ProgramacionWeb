// //function statement
// function greet() {
//     console.log('hi');
// }
// greet();
// //functions are first class
// function logGreeting (fn){
//     fn();
// }
// logGreeting(greet);

// //function expression
// var greetMe = function(){
//     console.log('hi aless');
// }
// greetMe();

// //it's still first class
// logGreeting(greetMe);

// //use a function expression on the fly
// logGreeting(function(){
//     console.log('Hello aless!');
// })

//new javascript

// //function statement
// let greet = () => {
//     console.log('hi');
// }
// greet();
// //functions are first class
// let logGreeting = (fn) =>{
//     fn();
// }
// logGreeting(greet);

// //function expression
// let greetMe = ()=>{
//     console.log('hi aless');
// }
// greetMe();

// //it's still first class
// logGreeting(greetMe);

// //use a function expression on the fly
// logGreeting(function(){
//     console.log('Hello aless!');
// })

// let greet = require ('./greet.js');
// greet();

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
//cualquier objeto que se crea a partir de esa clase persona van a tener acceso a ese prototipo
Person.prototype.greet = function(){
    console.log('Waddup, ' + this.firstname + ' ' + this.lastname);
};

let john = new Person ('John', 'Fornite');
john.greet();


// pass by value
function change (b){
    b = 2;
}

var a = 1;
change (a);
console.log(a);

//pass by reference
function changeObj(d){
    d.prop1 = function(){};
    d.prop2 = {};
}

let c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

//inmediatly invoked function expression
let firstname = 'Jane';

(function(){
    let firstname = 'John';
    console.log(firstname)
}());
console.log(firstname);