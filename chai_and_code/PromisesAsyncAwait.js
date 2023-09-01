// Promise are basically async code, it represent eventual completion or failure of an async task.
// Promise has three stages -
// 1. Pending
// 2. fulfilled
// 3. Rejected
// Promise are executed in two phases, creation phase and consumption phase.

// Promise Creation
// here resolve is linked with .then, and
// reject is linked with .catch
const promiseOne = new Promise((resolve, reject) => {
  //do an async task
  setTimeout(() => {
    let error = false;
    if (!error) {
      // we can pass data to our than using resolve
      resolve({ username: "Anushrey" });
    } else {
      // we can pass data to our catch using reject
      reject("Something went wrong");
    }
  }, 1000);
});

// Promise Consumption
// we can get data sent by resolve in parametere of .then, and
// data sent by reject in parametere of .catch.
promiseOne
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  })
  // .finally() - It will run every time irrespective of your resolve or reject.
  .finally(() => {
    console.log("Finally task done");
  });

// -------------------------------------------------------------------------------------
// Handling Promise with Async and Await
// It is same as .then and .catch but handle error in more good way
// NOTE - they can't handle on their own, 
  // we need to wrap them in try catch block.

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Anu" });
    } else {
      reject("Something went wrong, Promise two");
    }
  }, 1000);
});

// when our function gets async keyword,
// we can use await keyword inside that function
// NOTE - they can't handle on their own, 
  // we need to wrap them in try catch block.
async function consumePromiseTwo() {
  try {
    const response = await promiseTwo;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseTwo();
