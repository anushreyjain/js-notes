So, here we will discuss how async code gets executed in the JavaScript.

So, when the code gets executed, a call stack is formed.
this call stack has a Global Execution Context, and fucktions are loaded one by one in call stack.
then as functions gets done, they are unloaded from the call stack one by one.

so, now when we want to do some asyn code, we need anythign which can hold my task,
and do my task in a given time and return the result, so for this
we have web API.
 
Now, assume we have a setTimeout() call of 2 sec,
1. so it gets passed from call stack to web api.
2. than, its goes to Register callback.
3. Register callback holds all the events when when these all task are to be done, like in 2 sec, 2 min or so on
4. Now, Task Queue comes into picture. After the program is done in Registar callback and we got the result. We need to put that program back into call stack to get executed na, so Task Queue do this.
5. Task Queue holds all the finishes Async program to insert them back into Call Stack

NOTE - 
Now, some new things are added in JS.
Like if we do a fetch in JS, and use a promise there.
There we get a High Priority Task Queue.
Basically it is same as Task Queue but with some high priority.
