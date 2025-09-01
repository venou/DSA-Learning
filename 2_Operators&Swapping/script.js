// let a = 10;
// let b = 20;

// console.log("Before swap: a =", a, "b =", b);

// Method 1: Using a temporary variable
// let temp = a;
// a = b;
// b = temp;

// console.log("After swap: a =", a, "b =", b);

// 2. Using Arithmetic Operators

// let x = 5, y = 10;
// x = x + y; // 15
// y = x - y; // 5
// x = x - y; // 10
// console.log(x, y); // 10, 5

// 3. Using Destructuring Assignment (Modern ES6+ ✅)

// let x = 5, y = 10;
// [x, y] = [y, x];
// console.log(x, y); // 10, 5

// 1. Swap two numbers using a **temporary variable**.
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log(a, b);

// 2. Swap two numbers **without using a third variable**.
let x = 10,
  y = 15;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);

// 3. Swap two strings (`"hello"` and `"world"`) using **destructuring assignment**.
let p = "hello",
  q = "world";
[p, q] = [q, p];
console.log(p, q);

// 4. Swap two boolean values (`true`, `false`).
let val1 = true,
  val2 = false;
[val1, val2] = [val2, val1];
console.log(val1, val2);

// 5. Swap the **first and last element** of an array.
//    Example: `[1, 2, 3, 4, 5] → [5, 2, 3, 4, 1]`
let arr = [1, 2, 3, 4, 5, 6];
[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
console.log(arr);

// 6. Swap values at any **two given indexes** in an array.
//    Example: Swap index `1` and `3` in `[10, 20, 30, 40] → [10, 40, 30, 20]`
let arr1 = [10, 20, 30, 40];
[arr1[1], arr1[arr1.length - 1]] = [arr1[arr1.length - 1], arr1[1]];
console.log(arr1);

