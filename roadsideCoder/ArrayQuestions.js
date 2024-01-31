// 1 - Second largest number
// given an array of size n, print second largest distinct element from an array
// Input - [12,35,1,10,34,1] ---> Output: 34
// Input - [10,5,10] ---> Output: 5

// normal approach
// function secondLargest(arr) {
//   const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return -1;
//   }
// }

// console.log(secondLargest([12, 35, 1, 10, 34, 1]));

// optimised approach
// function getSecondLargest(arr) {
//   let largest = Number.NEGATIVE_INFINITY;
//   let secondLargest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] != largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// console.log(getSecondLargest([10,5,10]));

//--------------------------------------------------------------------------------------
// 2. Rotate array by K
// given an integrer array nums, rotate the array to the right by k steps,
// where k is non - negative

// Input: nums = [1,2,3,4,5,6,7], k = 3 ---> Output: [5,6,7,1,2,3,4]
// Input: nums = [-1.-100, 3, 99], k = 2 ---> Output: [3,99,-1,-100]

// function rotateArr(arr, n) {
//   if (n > arr.length) {
//     n = n % arr.length;
//   }
//   let newArr = [...arr];
//   for (let i = 0; i < n; i++) {
//     const lastValue = newArr.pop();
//     newArr.unshift(lastValue);
//   }
//   return newArr;
// }

// console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));

//--------------------------------------------------------------------------------------
// 3. Remove duplicate elements from a sorted array and give output of number of unique elements of that arr

// solution
// we will check if the first element is same as second element, if it is
// remove the second element nd soo on

// function getUnique(arr) {
//   // run loop till arr.length - 1 because we want to leave the last elem for comparision
//   for (let i = 0; i < arr.length - 1; i++) {
//     // compare arr 1st and 2nd element
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1);
//       // than make i one less, so we can compare again the 1st element to other 2nd element
//       i--;
//     }
//   }
//   return arr.length;
// }

// console.log(getUnique([0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]));

// Two pointer approach------------------------------
// take two pointers
// one as i = 0
// and other as a for loop
// than compare i with j, if the same element gets, do nothing
// if we get a different elem, make i as the new elem
// Example -
//[0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]
// here  i=0
// j = 0, than
// j= 1
// so now, i =1, [0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4] and so onn
// basiaclly we will sift all the unique elements in the start of an arr

// function getUnique(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   return i + 1;
// }


// console.log(getUnique([0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]));
