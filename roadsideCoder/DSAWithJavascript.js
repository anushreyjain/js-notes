// Questions -
// 1. Paindrome Number
// i.e 121 - Is a Palindrome number
// 90 is not
// a number which is same if we wirte it from start or end is called a palindrome number.
// function isPalindrome(num) {
//   return num > 0
//     ? num === +num.toString().split("").reverse().join("")
//     : "Number should be greater than 0";
// }
// console.log(isPalindrome(11211));

// -------------------------------------------------------------------
// 2. Fibonacci Number
// Fibonacci series is sum of last 2 numbers and keep on going up
// i.e 0,1,1,2,3,5,8,13........
// Input - n = 3, so give the third index of the series, i,e 3 (Count from 0 index)
// function getFabiNumber(n) {
//   var arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// }

// console.log(getFabiNumber(6));

// -------------------------------------------------------------------
// 3. Valid Anagram
// An anagram is word or phrase formed by rearranging the letters of a different  word or phrase, using all the original letters exacty one.
// Example - s --> anagram, t--> nagaram ----> output - true
// Example - s --> rat, t--> car ----> output - false

// First Approach - Not an Optimized approach
// by sorting the str and comparing them
// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;
//     return s.split("").sort().join() === t.split("").sort().join();
//   }
// console.log(isAnagram("car", "rat"));

// Second Approach - Optimized Approach
// using objects, putting keys in obj and comparing them.
// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   let obj1 = {};
//   let obj2 = {};
//   for (let i = 0; i < s.length; i++) {
//     obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//     obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//   }

//   for (const key in obj1) {
//     if (obj1[key] !== obj2[key]) return false;
//   }
//   return true;
// }

// console.log(isAnagram("rat", "tar"));

// -------------------------------------------------------------------
// 4. Two Sum
// Given an array of integers nums and an integer targer.
// return indices of the two nunmbers such that they add up to the target.

// Input: nums: [2,7,11,15], target = 9
// Output - [0,1] , because indices 0 is 2 and 1 is 7, that adds up to target 9.

// Input: nums: [3,2,4], target = 6
// Output - [1,2] , because indices 1 is 2 and 2 is 4, that adds up to target 6.

// Approch 1 - BruteForce Approach --- Not Optimized approach
// First we will check all possible combinations in the arr
// and will return the index , when it matches the target value
// [2,7,11,15] so here comibbations will be - 2-7, 2-11, 2-15, 7-11, 7-15, 11-15.
// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) return [i, j];
//     }
//   }
// }
// console.log(twoSum([3, 2, 4], 6));

// Approch 2 - Using JS Objects --- Optimized approach
// here we take an object
// {
//     '3': 0, // 6 -3 = 3 (check does 3 exsist in arr or not),
//     '2': 1, // 6 - 1 = 4 (check does 4 exsist in arr or not), yes but we didnt reached to ans yes
//     '4': 2, // 6- 3 = 2 (check does 2 exsist in arr), now find it in the obj and resturn the indices
//     // i.e [1,2]
// }
// function twoSum(arr, target) {
//   var obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     //first get the current number
//     var n = arr[i];
//     // now check (target - current number) exsist in arr or not
//     // if we get the postion, it must be >= o
//     if (obj[target - n] >= 0) {
//       // if we found the postion, we will return the indices
//       return [obj[target - n], i];
//     }
//     // what if that value does not exsist in arr,
//     // we need to provide the postion to it in out object
//     // i.e we need to provide it the index in our object
//     else {
//       obj[n] = i;
//     }
//   }
// }
// console.log(twoSum([3, 2, 4], 6));

// -------------------------------------------------------------------
// 5. Best time to buy and sell stocks.
// you are given an array prices where prices[i] is the price of a given stock on the ith day
// You want to maximize your profit by choosing a single day to buy one stock.
// and choosing a different day in future to sell the stock
// Return the maximum profit, if you cannot achieve any profit, return 0

// Input price = [7,1,5,3,6,4]; -----> Output: 5;
// Input price = [7,6,4,3,1]; -----> Output: 0;

// solution using greedy algorithm----
// [7,1,5,3,6,4]
// compare each value and take smallest value as a stock price and ignore other values during comparision
// and meanwhile compare diff between those values and only take forward the max profit and ignore other values
// minStockValue --> 7 -- 1 < 7 = 1 -- 5 < 1 = false -- 1 -- 3 < 1 = false
// maxProfit --> 0 -- 0 - 5 - 1 = 4 --

// function maxProfit(prices) {
//   let minStockValue = prices[0];
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     // comapre the minStock value with every value in prices arr
//     if (prices[i] < minStockValue) {
//       minStockValue = prices[i];
//     }

//     // to calculate profit at each value of stock and get the max profit value
//     maxProfit = Math.max(maxProfit, prices[i] - minStockValue);
//   }

//   return maxProfit;
// }

// console.log(maxProfit([5, 4, 3, 2, 10]));
