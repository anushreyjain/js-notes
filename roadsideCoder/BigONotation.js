// Time Complexcity -
//  So basicaaly it is a mertic to judge the time complexcity effifciency of our algorithm.

// First we need to learn about Operations -
// What are operations and how many operations our code has.
// Example -
// function getSomething(n) {
//     // so here we have 3 operations -
//     // i,e multiple, substract and divide
//   return (n * (n - 2)) / 5;
// }

// Majorly there are three cases :

// O(1) --> O of one -------------------------------------------------
// here when the numbers of opearions remains constant and  does not changes on the basis of input, our code will have a time complexity of O(1)
// Example -
// function getSomething(n) {
//   // so here we have 3 operations -
//   // i,e multiple, substract and divide
//   // but the number of operations does not change as per the input
//   // so it will have the complexity of O(1)
//   return (n * (n - 2)) / 5;
// }

// O(n) --> O of n --------------------------------------------------
// here, when the number of opperations depends on the input and increases constantly.
// Example -
// function getSomeValue(n) {
//   console.log("Step 1"); // Operation 1
//   // Operation 2
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   console.log("step 2"); // Operation 3
//   // Operation 4
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log("Step 3"); // Operation 5
// }

// getSomeValue(3)
// Explanantion ---
// so here we have 2 operations that vary as per the input, i.e operation e and 4
// these operation increase constantly, like if n = 2, we get 2 values, if n= 3, we get 3 values from each operation.
// other three are constatnt,
// so the complexcity will be
// 2n + 3
// here will be ignore and 2 and +3 , and will take n
// O(n)

// O(n^2) --> O of n square --------------------------------------------------
// here, when the number of opperations depends on the input and increases exponantially.
//Example -
// function getCompplex(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(j, i);
//     }
//   }
// }

// getCompplex(3)
// Explanantion ---
// here the operations are increasing exponentially, like if n = 2, we get four result, if n=3, we get nine results.
// so complixcity will be
// O(n^2)

//---------------------------------------------------------------------------
// Space Complixcity
// An amount of memory an algorithm need to run.

// NOTE -
// Boolean, number, undefined and null --> Constant Space Complexcity
// String, Array and Objects --> Dyanmic Space Complexcity

// O(1) Space Complixcity -----------
// When we get a single output or a constant output irrespectiev of input.
// Example -
// function getRes(n) {
//   return n.reduce((acc, item) => acc + item);
// }
// console.log(getRes([10, 12, 3, 44, 5, 6, 7, 8]));
// Explanantion --
// here we get a single value output irrespective of how big the input it.

// O(n) Space Complixcity -----------
// when the operations increases constantly as changing the input.
// Example -
// function funnyNumber(n) {
//   const arr = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr.push(i * 69);
//   }
//   return arr;
// }

// Explanantion---
// so here if gve n = 5, we get an array of 5 ,
// if we get n =6, we get array of 6,
// so output increases constantly here
// so it will have complexity as O(n)

// O(n^2) Space Complixcity -----------
// When the operations and output increases exponentially as per the input,
// like if n=2, we get 4 output, if n=3, we get 9 output
// we get complxcity as O(n^2)
    