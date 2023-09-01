When we make a fetch request, it gets executed in two pahse.
1. Memory allocation to the suppose varibale, we call it data.
We cannot directly aceess this variable.
In this variable, there are 2 arrays,- 
onFulfilled [], and
onRegection [].
These 2 arrays, which contains function inside them are also private and we cannot access them

If promise gets resolved the results get into onFulfilled[] array and if it gets rejected, result get into onRegection[].

2. Web browser/node API - 
From here network request goes, we cannot make it directly so browser or node helps in it.
Now, if network request is fired. So we will get results or not.
If we get result, it goes to onFulfilled[] array, and
If we get an error, it goes to onRegection[] array.

And than that varaible created in the memory takes result to our created varibaled and is diplayed to us.