// Everyhing is done after ES6
// classes are basically syntactical sugar of prototypes.

class User {
  // as we write new keyword, our constructor funtion is called
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // we made a method insde our class
  encryptPassword() {
    return `${this.password}abc`;
  }

  nameCaptial() {
    return `${this.name.toUpperCase()}`;
  }
}

// lets call this class now
const userOne = new User("Anu", "anu@gmail.com", "123");

console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.nameCaptial());


// behind the scene
// when we dont have classes, how thing will work

// we create a function with all the values we need
// function User(name, email, password){
//     this.name = name,
//     this.email = email,
//     this.password = password
// }

// // now to add the methods as we added in class,
// // here we need to add the methods in prototype.

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.nameCapital = function(){
//     return `${this.name.toUpperCase()}`
// }

// // now we call this function
// const userTwo = new User('veenu', 'veenu@google.com', '456')
// console.log(userTwo);
// console.log(userTwo.encryptPassword());
// console.log(userTwo.nameCapital());