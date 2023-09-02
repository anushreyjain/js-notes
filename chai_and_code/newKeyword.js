// new keyword is used to make a new instance of Constructor function
// everytime it is called, it makes a new instance

// new keyword do the following things - 
// 1. it creates a new empty object in the memory.
// 2. a prototype is linked - the newly created object gets linked to the prototype 
//    property of constructor fucntion. Means it has access to all the properties and 
//    mothods inside the constructor's prototype.
// 3. a constructor fucntion is called due to new keyword, 
//    it packs all argument in an obj and return it.
// 4. The new object is returned with all the values in it.


// NOTE - Constructor function is an built-in function present in JavaScript.
// It is nothing but a reference about your own function.


// Example - 

// We make a contrsctor function
function User(username, isLoggedIn){
    // here, this refers to its own function i.e User   
    this.username = username,
    this.isLoggedIn = isLoggedIn

    // there is an implecit return of this, but we can do explicit also
    return this
}

// here as we write new keyword, 
// an instance of our Constructor fucntion i.e User is created.
// now we can use it multiple times, everytime new instance will be created
// and in every instance, this will refer to its own properties
// instance 1
const userOne = new User('Anu', false)
console.log(userOne);
// instance 2
const userTwo = new User('Anushrey', false)
// userTwo.giveUsername()
console.log(userTwo);


// PRO TIP - Functions can be treated as fucntions as well as objects.
// we can inject our own function also in prototype of function. like   
User.prototype.giveUsername = function(){
    console.log(`This is given Username: ${this.username}`);
}

const userThree = new User('Veenu', true)
userThree.giveUsername()
console.log(userThree);