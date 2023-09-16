// 1. let, var and const
// var is from ES5, let and const are from ES6.
// var has global scope or functional scope, let and const has block/bracket scope.
// var is attached to window object, let and const does not.
// var shows hoisting, let and const does not.

// 2. Higher Order Function
// A function which accepts a function in a parameter, or returns a function or both.
// example - forEach method always takes another function inside it, so it is HOF.
// other examples are - map, filter and reduce.

// 3. First Class Functions
// When the fucntion can be treated as a normal value or like varibales.
// we can save them in a varible and pass them as arguments to another fucntion.

// 4. Constructor Functions
// When function is called using new keyword, returns an object and
// if we use 'this' keyword inside that function,
// it will return all the properties and method written inside that function
// This type of fucntion is called Constructor Function.

// 5. new keyword
// it is used to create an instance of an object based on constructor function.
// new keyword creates a new empty object and sets this keyword to point to that new empty object.
// Example -
// function Abcd(name) {
//   this.name = name;
// }
// let result = new Abcd('Anu')
// console.log(result);

// 6. Immediately Involved Function Expression (IIFE)
// It is a way of creating a function and executing it immediately without calling it later.
// Normal Function
// function abcd() {}
// IIFE
// (function defg() {})();
// Use case - IIFE are basically used to create a private scope for your code,
// so that varibales and function defined inside IIFE are not accesible from outside IIFE.


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


// Done till page number - 14