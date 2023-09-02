class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// now we make another class, and inherit Uer class in it
// we use extends keyword to inherit the class

class Teacher extends User {
  constructor(username, email, password) {
    // we need to use super
    // because that username is coming from inherited class
    // super do exactly like .call thing
    // it sets the this of Teacher class into User class and gets the value
    super(username);
    this.email = email,
    this.password= password 
  }

  addCourse(){
    console.log(`New course was added by ${this.username}`);
  }
}

// we make one instance using Teacher class
const userOne = new Teacher('anushrey', 'anu@fb.com', '8520')
userOne.addCourse()

// we make another instance using User class
const userTwo = new User('veenu')

// PRO TIP - 
//1. what is we comapare instance created by its class
console.log(userOne === Teacher); // false
// because they are not exactly same, it is an instance of it

//2. to check weather it is an instance of a class or not, we have
console.log(userOne instanceof Teacher); // true