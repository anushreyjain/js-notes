// var,let and const
// all are way of defining variables
// var was there from starting i.e ES5
// let and const are introduced in ES6.

// Differences -

// var
// 1. var is global or function scope
// 2. it can be redeclared
// i.e var a = 1
// var b = 2
// 3. can be declared without initialization
// i.e var a;
// 4. it can be updated or we can change its value after initialized.
// 5. it attach itself in the window object

// let
// 1. let is block scoped
// 2. cannot be re-declared in its scope
// i.e let a = 1
// let a = 2 // throws an error
// 3. can be decalred without initialization
// i.e let a;
// 4. it can be updated or we can changes its value after initialized.
// 5. does not attach itseld in the window object

// const
// 1. const is block scoped
// 2. cannot be re-declared in its scope
// i.e const a = 1
// const a = 3 // throws an error
// 3. cannot be declared wihhout initialization
// i.e const a; // throws an error
// 4. it cannot be changed or we cannot change its value once it is initialzed
// 5. does not attach itseld in the window object
