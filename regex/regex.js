// basically regex are used to match strings.

// /anyWord/
// this regex is used to match an exact word in a string
// we can use createdRegex.test(textString) method to text our regex
// Example -
// const myString = 'This is string';
// const myRegex = /This/;
// console.log(myRegex.test(myString)); // return true if yes, or false

// to match multiple string, we use | -> OR thing
// like /This|That|is|and/
// here we are checking for all any of them word in a string.
// Example -
// const myString = 'This is a my string';
// const myRegex = /This|my|is/;
// console.log(myRegex.test(myString)); // return true if yes, or false

// Ignore Case While Matching
// yiu can do this by using thing called as flag.
// i flag - flag that ignore cases
// Example -
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i;
// // now, here this i flag will check other cases also, like case sensetive and all cases
// console.log(fccRegex.test(myString));

// Extract Matches
// .match(takesRegex)
// it is opposite of .test() method
// it is applied on string and takes the regex as an argument.
// Example -
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// console.log(extractStr.match(codingRegex));

// Find More Than the First Match
// to search or extract pattern more than once, we can use g flag, called global flag.
// Example - 
// let extractStr = "Twinkle, Twinkle, little star";
// let codingRegex = /Twinkle/g;
// console.log(extractStr.match(codingRegex));

// PRO TIP - You can have multiple flags on your regex like /search/gi

// Match Anything with Wildcard Period
// we can use .(dot) or wildcard period, this will match even any one character is a string.
// Example- 
// like if we want to match all these words hug, huh, hut, and hum.
// we can simply use /hu./


// Match Single Character with Multiple Possibilities
// You can search for a literal pattern with some flexibility with character classes.
// It allows you to define a group of characters to match inside [] square brackets.
// Example- 
// if you want to match 'bag, big, and bug but not bog'
// we can use /b[aiu]g/ regex, here we used [aui] as character classes.



