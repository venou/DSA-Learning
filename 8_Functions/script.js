// function sum(a, b) {
//     let multiplicatio = a * b
//     console.log(multiplicatio)
// }

// sum(7, 10)

// function square(x) {
//     let result = x * x;

//     return result;
// }

// let value = square(4)
// console.log(`value of square is ${value}`)

// Elibgible to Vote

// function eligibleToVote(age) {
//   if (age < 0) {
//     console.log("Invalid Input");
//   } else if (age < 18) {
//     console.log("not eligible");
//   } else {
//     console.log("eliggible");
//   }
// }

// eligibleToVote(12);
// eligibleToVote(-2);
// eligibleToVote(19);

// Create a function to check if a number is odd or even

// function checkNum(num) {
//   if (num < 0) {
//     console.log("Negative Number");
//   } else if (num % 2 === 0) {
//     console.log(`${num} is even number`);
//   } else {
//     console.log(`${num} is odd number`);
//   }
// }

// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

// let array = [2, 4, 6, 8, 10];
// function searchElement(array, x) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == x) {
//       return i;
//     }
//   }
//   return -1;
// }

// let result = searchElement(array, 12);
// console.log(result);

// Write a function that returns the number of negative numbers in an array.

// let array = [21, -11, 99, 3, 4, -21];
// let array2 = [21, -11, 99, 3, -22, -3, 4, -21];
// function countNegative(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let result = countNegative(array2);
// console.log(result);

// Write a function that returns the largest number in an array

// let arr = [5, 0, 7, 10, 8, 17, 1];
// function findLargest(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// let res = findLargest(arr);
// console.log(res);

// Write a function that returns the smallest number in an array

// let arr = [4, 9, 12, -1, 2, 8, 7, 1];

// function findSmallest(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let smallest = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }
// let res = findSmallest(arr);
// console.log(res);

// Find Second Largest in array

// let arr = [4, 9, 0, 2, 8, 7, 1];

// function findSecondlargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// let res = findSecondlargest(arr);
// console.log(res);

// Write a function that returns the count of digits in a Number

// function countDigit(n) {
//   if (n == 0) return 1;
//   n = Math.abs(n);
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }

// let num = -22828;
// let result = countDigit(num);
// console.log(result);

