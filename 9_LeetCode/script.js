// Given an integer an X, return trueif x is a palindrome, and false otherwise

// function palindrome(x) {
//   let xCopy = x;
//   if (x < 0) {
//     return false;
//   }
//   let rev = 0;
//   while (x > 0) {
//     let rem = x % 10;
//     rev = rev * 10 + rem;
//     x = Math.floor(x / 10);
//   }
//   return rev === xCopy;
// }

// console.log(palindrome(1291));


// Reverse Integer

// function reverseInteger(x) {
//   let rev = 0;
//   let xCopy = x;
//   x = Math.abs(x);
//   while (x > 0) {
//     let rem = x % 10;
//     rev = rev * 10 + rem;
//     x = Math.floor(x / 10);
//   }
//   let limit = Math.pow(2, 31);
//   if (rev < -limit || rev > limit) return 0;
//   return xCopy < 0 ? -rev : rev;
// }

// let res = reverseInteger(874328778238787);
// console.log(res);
