// call is used to pass the current execution context to another fuction.
// so we can get the value from that function and use in our fucntion.

// basically call is used to hold the reference of a fucntion which is used 
// inside another function.

// Example -
// we have a function
function GetUsername(username){
    this.username = username
}


// and we have another function, in which we will use the above function
// so by default, we cannot use it. because we are not able to get its value
// we need to hold its referece in anything, and 
// provide current execution context to the above function
// i.e we have to tell above function to use 'this' of below function.
function GetUser(username, email, password){
    GetUsername.call(this,username)
    this.email =email,
    this.password = password
}

// here we use new keyword to make and empty object and
// assign all the properties in it,
// which will make an instance of GetUser Constructor function
const user = new GetUser('Anu', 'anu@gmail.com', 123)
console.log(user);

