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

let greet = require ('./greet.js');
greet();