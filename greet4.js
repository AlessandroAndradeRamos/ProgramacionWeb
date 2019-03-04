function Greetr(){
    this.greeting = 'Hello, John Fornite 2';
    this.greet = function(){
        console.log(this.greeting);
    }
}
module.exports = Greetr;