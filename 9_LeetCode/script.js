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

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// let val = 2;

// function removeElement(nums, val) {
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[x] = nums[i];
//       x = x + 1;
//     }
//   }
//   return x;
// }

// let res = removeElement(nums, val);
// console.log(res);

// #88 Merge Sorted Array

// Brute Force Approach
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// function merge(nums1, m, nums2, n) {
//   let temp = [];

//   for (let i = 0; i < m; i++) {
//     temp.push(nums1[i]);
//   }
//   for (let j = 0; j < n; j++) {
//     temp.push(nums2[j]);
//   }
//   temp.sort((a, b) => a - b);

//   for (let k = 0; k < temp.length; k++) {
//     nums1[k] = temp[k];
//   }
// }

// merge(nums1, m, nums2, n);
// console.log(nums1);

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// function merge(num1, m, nums2, n) {
//   let nCopy = nums1.slice(0, m);
//   let p1 = 0;
//   let p2 = 0;
//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && nCopy[p1] < nums2[p2])) {
//       nums1[i] = nCopy[p1];
//       p1++;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }
// }
// merge(nums1, m, nums2, n);
// console.log(nums1);

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;
// function merge(nums1, m, nums2, n) {
//   let p1 = m - 1;
//   let p2 = n - 1;
//   for (let i = m + n - 1; i >= 0; i--) {
//     if (p2 < 0) break;
//     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//       nums1[i] = nums1[p1];
//       p1--;
//     } else {
//       nums1[i] = nums2[p2];
//       p2--;
//     }
//   }
// }

// merge(nums1, m, nums2, n);
// console.log(nums1);

// Zeores

// nums = [0, 1, 0, 3, 12]

// function zeros(nums) {
//     let x = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[x] = nums[i]
//             x++
//         }
//     }
//     for (let i = x; i < nums.length; i++) {
//         nums[i] = 0
//     }
// }
// zeros(nums)
// console.log(nums)

// Find Consecutives

/**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxConsecutiveOnes = function (nums) {
//   let currentCount = 0;
//   let maxCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       currentCount++;
//     } else {
//       maxCount = Math.max(currentCount, maxCount);
//       currentCount = 0;
//     }
//   }

//   return Math.max(currentCount, maxCount);
// };

// # 136 Single Numbers
let nums = [2, 2, 1];

function singleNumbers(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
}

const result = singleNumbers(nums);
console.log(result);

// #707. Linked List
function Node(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr ? curr.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.size === 0) {
    this.addAtHead(val);
    return;
  }
  let curr = this.head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = new Node(val);
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  let newNode = new Node(val);
  newNode.next = curr.next;
  curr.next = newNode;

  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
    }
  }

  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
