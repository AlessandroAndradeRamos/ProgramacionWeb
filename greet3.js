function Greetr(){
    this.greeting = 'Hello, John Fornite';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();