// JS has prototype behaviour.
// i.e it kees on searching laye by layer means on parents, grandParent and so onn
// until it gets null value also known as Prototypal Inheritance.

// Protoype givs us the following - 
// this keyword
// classes
// we don't have this keyword inside arrow function
// prototypal inheritance

// lets have a task to build a method to remove all spaces from the string.
// we can use it globally on any string.
// Sol- we have to add a new prototype method to String.
let userName = 'Anushey     ';

String.prototype.trueLength = function() {
    console.log(`True lenght of string is - ${this.trim().length}`);
}

// userName.trueLength()

// PRO TIP - We can proof that everything is Object in JS.
// we can declare a strng, array and an Object.
// and we can add a new method into Object directly, in global Object data type.

let newArra = ['one', 'two']
let newObj = {
    user: 'One',
    password : '1234'
}

function myFunction(){
    return 2+1
}

// now lets add a new method into Object prototype
Object.prototype.myCustomProperty = function(){
    console.log("This is my custom property");
}

// now this property should be present in every string, array and object.
// lets check

// so by this we can see, that method exsist in every data type
// Hence, Everthing is ultimately Object in JS
// newArra.myCustomProperty(); // Array
// userName.myCustomProperty(); // String
// newObj.myCustomProperty(); // Object
// myFunction.myCustomProperty(); // Function

//-------------------------------------------------------------------------------

// Inheritance in JS

//  const cars = {
//     isCars : true
//  }

//  const carCompany = {
//     isCarCompany: true
//  }

 // now by default, every object is a seperate instance.
 // they have their seperate exsistance here and are not inter connected
 // now we want to share information between them.

 // old method- we can use __proto__
//  const Cars = {
//     isCars : true
//  }

//  const CarCompany = {
//     isCarCompany: true, 
//     __proto__: cars
//  }

//  // we can do it in this way also -
//  CarCompany.__proto__ = Cars;

//----------------------------------------
// modern syntax
// Object.setPrototypeOf(ObjectToGetProperty, ObjectToWhichItTakesPropertyOf)