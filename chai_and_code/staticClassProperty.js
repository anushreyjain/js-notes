class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }

  // now suppose we need, as we make user, give it a id everytime
  static createId() {
    return `123 `;
  }
  // now, we dont want to give access of this createId object to every class
  // in which we will inherit this class i.e User class
  // for that just put static keyword
}

const newUser = new User("anu");
console.log(newUser.createId());
