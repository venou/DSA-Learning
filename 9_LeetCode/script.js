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

// Remove Duplicates from sorted Array

// let nums = [0, 1, 2, 3, 3, 5, 6, 8, 8, 9];

// function removeDuplicates(nums) {
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[x]) {
//       x = x + 1;
//       nums[x] = nums[i];
//     }
//   }
//   return x + 1;
// }

// let res = removeDuplicates(nums);
// console.log(res);

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

let res = removeElement(nums, val);
console.log(res);
