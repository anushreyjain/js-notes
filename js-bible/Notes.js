// 1. let, var and const
// var is from ES5, let and const are from ES6.
// var has global scope or functional scope, let and const has block/bracket scope.
// var is attached to window object, let and const does not.
// var shows hoisting, let and const does not.

// --------------------------------------------------------//---------------------------------------------------------------

// 2. Higher Order Function
// A function which accepts a function in a parameter, or returns a function or both.
// example - forEach method always takes another function inside it, so it is HOF.
// other examples are - map, filter and reduce.

// --------------------------------------------------------//---------------------------------------------------------------

// 3. First Class Functions
// When the fucntion can be treated as a normal value or like varibales.
// we can save them in a varible and pass them as arguments to another fucntion.

// --------------------------------------------------------//---------------------------------------------------------------

// 4. Constructor Functions
// When function is called using new keyword, returns an object and
// if we use 'this' keyword inside that function,
// it will return all the properties and method written inside that function
// This type of fucntion is called Constructor Function.

// --------------------------------------------------------//---------------------------------------------------------------

// 5. new keyword
// it is used to create an instance of an object based on constructor function.
// new keyword creates a new empty object and sets this keyword to point to that new empty object.
// Example -
// function Abcd(name) {
//   this.name = name;
// }
// let result = new Abcd('Anu')
// console.log(result);

// --------------------------------------------------------//--------------------------------------------------------------

// 6. Immediately Involved Function Expression (IIFE)
// It is a way of creating a function and executing it immediately without calling it later.
// Normal Function
// function abcd() {}
// IIFE
// (function defg() {})();
// Use case - IIFE are basically used to create a private scope for your code,
// so that varibales and function defined inside IIFE are not accesible from outside IIFE.

// --------------------------------------------------------//--------------------------------------------------------------

// 7. Map, Filter and Reduce
// Map -
// used same as forEach, i.e used to iterate over each element of an array.
// it always returns a new array.
// whatever result is returned is placed in the new array
// Example -
// const arr = [1, 2, 3, 4, 5];
// let result = arr.map((e, index, array) => {
//   return e * 2;
// });
// console.log(arr); // old array
// console.log(result); // new array after putting operations using map

// Filter-
// It is used to remove/delete/filter element from array on any given condition
// returns new array with the desired result
// it always expect something which returns true/false, like
// conditon e > 5, can be either true or false
// Example -
// const newArr = [1, 2, 3, 4, 5];
// let result = newArr.filter((e, index, array) => {
//   return e < 3;
// });
// console.log(newArr); // Our original array
// console.log(result); // new array after our operation

// Reduce-
// It is basically used to reduce an array into a single value, like
// we need to get the sum of all the element of an array, so it will be a single value.
// Example -
// const numArr = [2, 3, 4, 5, 6];
// let result = numArr.reduce((acc, value, index, array) => {
//     // console.log(acc);
//   return (acc = acc + value);
// }, 10);
// console.log(result);
// NOTE - here acc means Accumulator. It basically contains the previous answer or we can say
// build up answer. Like if we add 2 and 3, answer is 5, so acc will hold 5 until next operation
// is performed. When we goes to next, so it will be 5 + 4, so acc will now hold 9.

// PRO TIP - we can also assign a custom value to acc, the second parametere is the default
// value of acc. By default it is 0 and takes the first value of arr by itself.
// In the above example we have given acc default value as 10.

// --------------------------------------------------------//---------------------------------------------------------------

// 8. Ways to create Objects in JS.

// There are five ways to create objects -
// One -
// var object = new Object();

// Two -
// var object = Object.create(null);

// Three -
// var object = { name: "Anushrey" };

// Four -
// function Individual(usename) {
//   this.usename = usename;
// }
// var object = new Individual("Anushrey");

// Five -
// class Individual {
//   constructor(username) {
//     this.username = username;
//   }
// }
// var object = new Individual("Veenu");

// ----------------------------------------------------

// 8.1 Access object properties
// we can access them in two ways -
// const obj = {
//   name: "Anushrey",
//   age: 21,
// };
// console.log(obj.name);
// NOTE - we use square bracket notation when we are not sure about the value, or
// when the value is not predefined.
// console.log(obj['name']);

// ----------------------------------------------------

// 8.2 Delete object properties
// delete obj.name

// ----------------------------------------------------

// 8.3 Understanding Prototype
// so basically these are some by default properties which are given by JS to every object.
// it contains some helper methods, like .length

// ----------------------------------------------------

// 8.4 Understanding Prototypal Inheritance
// So basically it means that child can inherit all the properties of parent prototype into
// it's own prototype.
// Example -
// parent object
// const Parent = {
//   name: "Anushrey",
//   canWalk: true,
//   canFly: false,
// };
// now we make a child object
// const Child = {
//   name: "Child",
//   canCrawl: true,
// };
// now, we use prototypal inheritance
// by doing this, we have injected all the parent properties into child
// Child.__proto__ = Parent;
// now, lts check child also has parent properties or not!.
// console.log(Child.canWalk); // yes it has parent properties

// --------------------------------------------------------//------------------------------------------------------------

// 9. Understanding Strict Mode
// to enable strict mode, write "use strict" at the top of your code.

// In Non Strict Mode-
// x = 10 // woks perfect
// // but Strict Mode
// x = 10 //gives error of variable not defined.

// In Non Strict Mode-
// var x = 10
// delete x // // no error and does not delete x
// // but Strict Mode
// var x = 10
// delete x // error

// In Non Strict Mode-
// function fnc(a, a) {} // no error
// // but Strict Mode
// function fnc(a, a) {} // error for same parametere a

// --------------------------------------------------------//-------------------------------------------------------------

// 10. THIS Keyword
// THIS keyword behaves different in different scope.

// In global scope, THIS keyword gives window object.
// console.log(this);

// In function scope, THIS keyword gives window object.
// function abcd() {
//   console.log(this);
// }

// In method scope, THIS keyword gives the object in which it is called.
// const obj = {
//   name: "Anushrey",
//   someMethod: function () {
//     return this;
//   },
// };
// console.log(obj.someMethod());

// NOTE - In any method, 'this' keyword always refers to parent object.

// In eventListner scope, THIS keyword is equal to whatever written before addEventistner
// var button = document.querySelector(".button");
// button.addEventListener("clickl", function () {
//   console.log(this); // here it will refer to button
// });

// --------------------------------------------------------//-------------------------------------------------------------

// Done till page number - 27
// Understanding call, apply and bind.
// to change function's this value to some object of our choice we use call, apply and bind.
// that means

// function abcd(){
//     console.log(this); // this is pointing to window object as of now
// }

// but we want to change value of this keywoed inside function from window to some object.

// ----------------------------------------------------

// using call:
// NOTE - use call when there are fixed number of arguments.
// parametere are taken one by one seperated by coma
// function cdef(a, b) {
//   console.log(this, a, b);
// }

// const obj = {
//   name: "Anu",
// };
// // cdef(); // this = window
// cdef.call(obj, "a", "b"); // this = obj

// ----------------------------------------------------

// using apply:
// NOTE - use apply when the number of argumanets are not fixed.
// do same thing as call, but just takes
// parametere are taken as an array
// function cdef(a, b) {
//   console.log(this, a, b);
// }

// const obj = {
//   name: "Anu",
// };
// // cdef(); // this = window
// cdef.apply(obj, ["a", "b"]); // this = obj

// ----------------------------------------------------

// using bind:
// bind is very similar to call, its just do not call the function straightforwardly, insted
// it returns the function to call it later whenever we want.
// function cdef(a, b) {
//   console.log(this, a, b);
// }

// const obj = {
//   name: "Anu",
// };
// // cdef(); // this = window
// let newfunc = cdef.bind(obj, "a", "b"); // it will not be executed directly, we can use it later
// console.log(newfunc());

// --------------------------------------------------------//-------------------------------------------------------------

// Pure Functions and Inpure Functions:
// A function is a pure function if it satisfy these condition -
// 1. it should always return same output for same input.
// that means,
// function someFunc(val) {
//   return val + 2;
// }
// console.log(someFunc(2));

// 2. it will never change/update the value of a global variable.
// It means,
// This function is changing/updating the value of global variable, so it is impure function
// let someVal = 0;
// function inpureFunc(x) {
//   someVal++; // here we are changing the value of global variable, so it is not a pure function
// }

// --------------------------------------------------------//-------------------------------------------------------------

// Currying
//