// Print n to 1 using recurison

// function print(num) {
//   if (num <= 0) return;
//   console.log(num);
//   num = num - 1;
//   print(num);
// }

// let num = 5;
// print(num);

// Write a program using recursion to print numbers from 1 to N, where N is a given number.
// let num = 10

// function print(x) {
//   if (x > num) return;
//   console.log(x);
//   x = x + 1;
//   print(x);
// }

// print(1)

// Write a program using recursion to print sum of element in an array

// let arr = [5, 4, 6, 8, 2];

// function sum(n) {
//   if (n === 0) return arr[n];
//   return arr[n] + sum(n - 1);
// }

// console.log(sum(arr.length - 1));

// Write a program using recursion to print sum of odd numbers in an array

// let arr = [5, 4, 6, 8, 9,2];

// function sum(n) {
//   let isOdd = arr[n] % 2 !== 0;
//   if (n === 0) {
//     return isOdd ? arr[n] : 0;
//   }
//   return (isOdd ? arr[n] : 0) + sum(n - 1);
// }

// console.log(sum(arr.length - 1));

// Write a program using recursion to print factorial

// function fact(n) {
//     if (n === 1) return 1
//     return n * fact(n - 1)
// }
// console.log(fact(8))

// Write a program using recursion to print factorial of element in an array

// let arr = [5, 4, 6, 8, 2]

// function factorial(n) {
//     if (n === 0) return arr[n]
//     return arr[n] * factorial(n - 1)
// }
// console.log(factorial(arr.length - 1))

// # 231 Power of two

function isPowerOfTwo(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(65));
