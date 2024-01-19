// Implement a Caching/Memorize function -
// Make a fucntoon which cache the values, if the same values are passed as an argument
//in a fucntion and calculation time is reduced.

// cached function
// function cacheValue(fn, context) {
//   const res = {};
//   return function (...args) {
//     var argsString = JSON.stringify(args);
//     if (!res[argsString]) {
//       res[argsString] = fn.call(context || this, ...args);
//     }
//     return res[argsString];
//   };
// }

// const bigCalcFunc = (num1, num2) => {
//   for (let i = 0; i <= 100000000; i++) {}

//   return num1 * num2;
// };

// const memorizedValue = cacheValue(bigCalcFunc);
// console.time("First Call");
// console.log(bigCalcFunc(6785, 6785));
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(bigCalcFunc(6785, 6785));
// console.timeEnd("Second Call");

// --------------------------------------------------------------------------------------------------------------------
// Actual Map Syntax
// nums.map((item, i, arr) => ( ))

// polyfill of map
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }

//   return temp;
// };

//------------------------

// Actual filter Syntax
// nums.filter((item,i , arr) => ())

// polyfill of filter
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

//--------------------------

// Actual reduce Syntax
// nums.reduce((item,acc, i, arr) => ())

// polyfill of filter
// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }

//   return acc;
// };

// ----------------------------------------------------------------------------------------

// Que - Diff between Normal Function and Arrow Function.

// Syntax-------
// function sayName() {
//   console.log("Hey");
// }

// const sayName2 = () => {
//   console.log("Hey");
// };

//------------------------
// Argument Keyword-------

// function sayName() {
//   console.log(arguments);
// }
// sayName("Anu", "veenu"); // gives output as arguments of fn

// const sayName2 = () => {
//   console.log(arguments);
// };

// sayName2("Anu", "veenu"); // gives an error. arguments is not defined.

//-----------------------------
// use of this keyword---------

// const obj = {
//   name: "Anushrey",
//   rec1() {
//     console.log(this.name)
//   },
//   rec2: () => {
//     console.log(this.name)
//   },
// };

// obj.rec1(); // gives the function context.
// obj.rec2(); // gives nothing, coz it points to the global context.

//-------------------------------------------------------------------------------------------

// Closure--
// It refers to the varibales in the outer scope from its inner scope.

// Lexical scope -
// It means that a Variable defined outside the function can we accessed inside the another
// function defined after varibale declaration while the opposite is not true.
// Example -
// var fuu = "hey"
// // global scope

// function sayName (){
//     //local scope
//     console.log(fuu); // will print "hey"
// }

// Example of closure --
// function sayName() {
//   var user = "Anushrey";
//   function sayUser() {
//     // this is a closure function
//     console.log(user);
//   }
//   sayUser();
// }
// sayName();

// ------------------------

// Closure Scope Chain ---
// Every closure has three scopes -
// 1. Local Scope (Own Scope).
// 2. Outer Function Scope.
// 3. Global Scope.
// Closure chain means that it has access to all the scopes from its own to parent scope
// and to global scope

//  Question ----------------

// 1. Optimisation -
// function find(index) {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd("6");

// console.time("500");
// find(500);
// console.timeEnd("500");

// here, we can use closure and optimise it. like -

// function find() {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find()
// console.time("6");
// closure(6);
// console.timeEnd("6");

// console.time("500");
// closure(500);
// console.timeEnd("500");

// --------------------------------
// 2. Use closure to create a private counter.
// function counter() {
//   //we use _ to say its a private varaible
//   let _counter = 0;

//   function add(increment) {
//     _counter += increment;
//   }

//   function retrive() {
//     return "Counter is " + _counter;
//   }

//   return {
//     add,
//     retrive,
//   };
// }

// const c = counter();
// c.add(10);
// c.add(5);
// console.log(c.retrive());

// ---------------------------------
// Que 3  - What is Module Pattern ?
// Ans - We have a function, in which we have a private and a public method inside it.
// User can only access the public method. But we can call our private method inside the
// public one.
// Example -
// const Module = (function () {
//   function privateMethod() {
//     console.log("hy");
//     // do something
//   }

//   return {
//     publicMethod: function () {
//       // can call private method here
//       privateMethod();
//     },
//   };
// })();

// Module.publicMethod();

//----------------------------------------------------------------------------------------
// Currying
// It is a function that takes one arguments at a time and returns a new function expecting the next argument.
// It is a conversion of fn, from fn(a,b) to fn(a)(b)

// -----------------------------

// Finite and Infinite Currying.

// Finite Currying
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(add(5)(5));

// Infiinite Currying
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(2)(3)(5)(3)(5)());

// --------------------------------
// chaining multiple functions inside an object and getting a result in one property.
// const calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   multiple(a) {
//     this.total *= a;
//     return this;
//   },
//   substract(a) {
//     this.total -= a;
//     return this;
//   },
// };

// const result = calc.add(10).multiple(5).substract(10);
// console.log(result.total);

// --------------------------------
// Currying and Partial Application.
// Partial Application transform a function into another function with lesser arguments.
// Example -
// function add(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }
// console.log(add(5)(10, 8));
// Whereas in Currying, it transform a function into another finction with one argumet at a time.

//---------------------------------
// Real life example of Currying
// Manipulating DOM -  we can create a function to update the text.

// function updateText(id) {
//   return function (content) {
//     document.querySelector('#' + id).textContent = content;
//   };
// }
// const updateHeading = updateText('heading');
// updateHeading('Hey, I am Anushrey')

//----------------------------------
// Convert a normal function fn(a,b,c) into a curried function fn(a)(b)(c).

// function curry(func) {
//   return function curriedFunc(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...next) {
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }

// const sum = (a, b, c) => a + b + c;
// const totalSum = curry(sum);
// console.log(totalSum(5)(5)(5));

//-----------------------------------------------------------------------------------------------------------------------
// Objects

// IMP - Implicit binding vs Explicit binding.
// when we use (.)dot notation, this keyword is implicitely binded with the object left to the (.)dot
// explicit binding means to bind the this keyword using call, apply and bind.

// IMP - When there are two keys with same name but different value,
// the last value will be consider with the same key order.

// Example -
// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };

// console.log(obj) // {a:'three', b: 'two'}

//-------------------------------------------
// IMP Oquestin 1-
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a) // ['object Object'] : 456
// Explanation -
// this is because, when we assigned a[b] and b is another object,
// so it is not able to convert into a key, and goes like '[object Object]',
// same happens when we do a[c], so it overrites the key, but
// uses the lates updated value i.e 456

//-------------------------------------------
// JSON.stringfy() and JSON.parse()

// JSON.stringify is used to convert your object into an string
// and JSON.parse() is used to convert that string back to object.

// Real Use case - when we need to store/get anything from local storage.

// PRO TIP -
// JSON.stringfy(obj, ['property1', ''property2])
// The second parameter here, it will only string those properties which we give insde that array
// and will ignore other properties.

//--------------------------------------------

// NOTE - objects are only equal when their reference are compared, not actual objects.
// because every objects takes a new space in memeory.
// Example -
// let a = {
//   a: 1,
// };
// let b;
// b = a;
// console.log(a == b); // true
// console.log({ a: 1 } == { a: 1 }); // false

//--------------------------------------------

// Four ways to clone an Object.

// const obj = {
//     user: "Name",
//     age: 25,
//     fullName: {
//       first: "Anu",
//       last: "Jain",
//     },
//   };

// First Way:
// const obj2 = Object.assign({}, obj); // shallow copy
// obj.fullName.first = "Veenu"
// console.log(obj2);

// Second Way:
// const obj2 = {...obj} // shallow copy
// obj.fullName.first = "Veenu";
// console.log(obj2);

// Third Way:
// const obj2 = JSON.parse(JSON.stringify(obj)); // deep copy
// obj.fullName.first = "Veenu";
// console.log(obj2);

// Fourth Way:
// const obj2 = structuredClone(obj) // depp copy
// obj.fullName.first = "Veenu";
// console.log(obj2);

//---------------------------------------------------------------------------------------------------------------------
// this keyword
// this keyword is used to refer something

// this in normal function and arrow function
// this in normal function always points to that function
// this in arrow function always point to its parent normal function or window object
// const obj = {
//   name: "Anu",
//   nestedObj: {
//     newName: "Veenu",
//     sayName() {
//       console.log(this.newName, this.name);
//     },

//     sayArrowName: () => {
//       console.log(this.newName, this.name);
//     },
//   },
// };

// obj.nestedObj.sayName();
// obj.nestedObj.sayArrowName();

// ------------------------------------
// Inside of class, this keyword points to the variables inside the constructor of that class.
// class user {
//   constructor(n) {
//     this.name = n;
//   }

//   getName(){
//     console.log(this.name)
//   }
// }
// const User = new user('Anushrey')
// User.getName()

// ---------------------------------------------------------------------------------------------------------
// call, apply and bind - explicit binding.

// ------------- call -----------------
// use case - when we need to bind the this to any object.

// const obj = {
//   name: "Anushrey",
// };

// function giveName(age, job) {
//   console.log("Hello", this.name, ", your age is " + age + ' ' + job);
// }

// giveName();

// now here, this of fn giveName is pointing to the global object, but we want it to point to obj object, we use call
// giveName.call(obj, 24, Developer);


// ------------apply---------------------
// exactly same as call, but just take argumamets as a array.
// giveName.apply(obj, [24, "Developer"]);


// -----------bind---------------------
// bind do not call the fn immedietely, but provide us with another fn, which we can call whenever we want.
// making it as a reusable function.
// const anotherFn = giveName.bind(obj);
// anotherFn(23, 'Developer')

//--------------------------------------
// polyfill of call 