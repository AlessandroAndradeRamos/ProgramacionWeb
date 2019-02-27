let person ={
    firstName : 'John',
    secondName : 'Fortnite',
    greet : function(){
        console.log('Howdy, ' + this.firstName + ' ' + this.secondName);
    }
};

person.greet();

console.log(person['firstName']);