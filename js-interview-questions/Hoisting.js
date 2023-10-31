// Hoisting

// Defination-
/* Being able to use a variable in its scope or functions before it is decalred,
JS interpretor moves all varaible, function and imports declaration at the top 
before execution of code.*/

// var is hoisted,
// let and const are also hoisted but they are into temporal dead zone,
// so they give reference error when hosited.
/* Temporal dead zone - the phase between the starting of the execution of block 
in which the let/const variable is declared till that variable is being initialized */
// only function expression are hosited not function declarations.
// Why function declarations are not hosited ?
// Ans - Because you have assigned it to a variable, that variabled will be hosited,
// but the function body is not a declaration and will be created later in other phase.
