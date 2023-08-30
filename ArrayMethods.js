// Add/Remove items
// for adding
// .push -- add item in the end
//.unshift -- add item in the begining

// for removing
// .pop -- removes item from end
// .shift -- removed item from start

//NOTE - .unshift and .shift works slow as compared to .push and .pop,
// because they add/remove element from the begining after which array needs to
// reaarange the index and elements inside it.

// Delete element from an Array
// NOTE - we cannot use .delete on Array, because in this the free space will be left and
// array will have the same lenght. .delete does not shift the index and fill the free space.

// so we need to use the special methods, like

// ---------------------------------------------------------------------------------------------------

// .splice
// it can insert, remove and replace elements.
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// returns the new array
// it includes the index also during all operation i.e incldues the value of start

// let arr = [1, 2, 3, 4, 5];

// remove element
// arr.splice(1, 3) // from index 1, remove 3 elements
// console.log(arr); // result - 1,5

// replacing elements
// arr.splice(0, 2, "Hey"); // from index 0, remove 2 elements and replace them with 'hey'
// console.log(arr); // result - ['hey', 3,4,5]

// adding elemets
// just put the delete count to 0
// arr.splice(1, 0, "added me"); // from index 1, delete 0 element and add 'added me'
// console.log(arr); // result - [1, 'added me', 2,3,4,5]

// negative index are allowed, they take value from backward
// arr.splice(-1, 0, "hey", "hello"); // from last index, delete 0 element and add 'hey' and 'hello'
// console.log(arr); // result - [1,2,3,4,"hey", "hello", 5]

// ---------------------------------------------------------------------------------------------------

// .slice
// arr.slice([start], [end])
// returns a new array
// copy all elements from start index to end index (not including end index) in new array
// negative values are assumed to take elements from backward
// no value of end, means go till end of an array
// PRO TIP - we can use .splice() with 0 parametere, to get a reference copy of an array
// and used it further without affectinng original array.

// let arr = [1, 2, 3, 4, 5];

// arr.slice(1, 3); // copy element from 1st index to 3rd index (not including 3rd index)
// console.log(arr.slice(1, 3)); // result - [2,3]

// ---------------------------------------------------------------------------------------------------

// .concat
// creates a new array including values from other arrays and other items
// let arr = [1, 2];
// console.log(arr.concat([3, 4], "hey")); // result - [1,2,3,4,'hey']
// NOTE - if we concat objects, they are added as whole, like
// let obj = {
//   0: "One",
//   1: "two",
//   length: 2,
// };
// console.log(arr.concat(obj)); //result - [1,2, {obj}]
// BUT- now if you want to copy the obj keys as normal values,
// your obj should include Symbol.isConcatSpreadable property.
// also it should have lenght property.

// let obj = {
//   0: "One",
//   1: "two",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };

// console.log(arr.concat(obj)); // result - [1,2,one, two]

// ---------------------------------------------------------------------------------------------------

// Searching in array

// .indexOf(item, from)
// looks for 'item' starting from index 'from'
// returns the index if found, otherwisw -1

// .lastIndexOf(item, from)
// search from right to left
// looks for 'item' starting from index 'from'
// returns the index if found, otherwisw -1

// .includes(item, from)
// looks for 'item' starting from index 'from'
// retuns true if found, otherwisw false
// includes treat NaN correct if it exsits in array

// .find(fn)
// suppose we have an array of objects, and
// we need to find and object on any particular condition,
// so we can use 'find'
// returns the item, if condition gets true,
// returns undefined, if nothing is found
// Syntax
// .find((element, index, array) => {})
// Example-
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let user = users.find((item) => item.id == 1);
// console.log(user); //result - gets obj with id:1

// .findIndex(fn)
// same as find, it just gives the index of element if found
// if nothing found, gives -1

// .findLastIndex(fn)
// same as findIndex(fn)
// but searches from right to left and return index of element if found.

// filter
// so find looks for single element,
// if there are multiple elements which fulfill the given condition,
// we can use filter
// IMP - it returns an array of all matched elements
// syntax
// .filter(function(item, index, array){})
// Example -
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let someUsers = users.filter((item) => item.id < 3);
// console.log(someUsers);

// ---------------------------------------------------------------------------------------------------

// Transform an array
