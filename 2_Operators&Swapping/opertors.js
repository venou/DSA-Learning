// # 📝 JavaScript Operators – Practice Questions

// 1. Arithmetic Operators (+, -, *, /, %)

// Write a program to calculate the area of a rectangle (length * width).
let length = 10,
  width = 8;
let area = length * width;
// console.log(area);

// Find the remainder when 57 is divided by 8.
// let result = 57 % 8;
// console.log(result);

// Compute 12 / 5 and explain why the result is not an integer.
// console.log(12 / 5);
// 🔎 Explanation:
// In JavaScript, the / operator always performs floating-point division, not integer division.
// That means instead of discarding the decimal part (like some other languages do), it gives you the exact decimal result.
// 12 ÷ 5 = 2.4 → not an integer.
// console.log(Math.floor(12 / 5)); // for making in integers

// If a = 7 and b = 3, calculate (a + b) * (a - b).
let a = 7,
  b = 3;
// console.log((a+b) * (a-b));

// Predict the output:
// console.log(10 + 20 + "30"); //3030
// console.log("10" + 20 + 30); // 102030

// 2. Relational Operators (>, <, >=, <=, ==, !=)

// Check if 25 is greater than 15.
// console.log(25 > 15);

// Compare "5" == 5 and "5" === 5. Explain the difference.
// console.log("5" == 5);
// console.log("5" === 5);
// Explaination:-
// == → checks only value (after type conversion).
// === → checks both value and type (no conversion).

// Write a condition to check if a number is between 50 and 100 (inclusive).
// let number = prompt("Enter your number");
// if (number >= 50 && number <= 100) {
//   console.log("your number is valid");
// } else {
//   console.log("your number is invalid");
// }

// Predict the output:
// console.log(10 != "10"); // false
// console.log(10 !== "10"); //true

// 3. Logical Operators (&&, ||, !)

// Check if a person is eligible for a driving license:
// Age must be 18 or more
// Must have passed a driving test (true/false)

// let age = prompt("Enter Your Age");
// let dltest = true;
// if (age >= 18 && dltest) {
//   console.log("you are eligible");
// } else {
//   console.log("you aren't eligible");
// }

// Test the output of:

// console.log(true || false && false);
// Precedence rule: && runs before ||.
// So evaluate false && false first → false.
// Now expression becomes:
// true || false
// Result → true ✅
// console.log((true || false) && false);
// Parentheses () run first.
// Inside → true || false → true.
// Now expression becomes:
// true && false
// Result → false ✅

// Write a program to check if a number is even AND positive.

// let number = Number(prompt("Enter Your Number"));

// if (number % 2 === 0) {
//     console.log("Your Number is Even");
// } else {
//     console.log("Your Number is Odd");
// }

// If isRaining = true and hasUmbrella = false, check whether you can go outside.

// let isRaining = true;
// let hasUmbrella = false;

// if (!isRaining || hasUmbrella) {
//     console.log("You can go outside");
// } else {
//     console.log("You can't go outside");
// }

// Condition: Go outside only if it’s not raining OR you have an umbrella.

// 4. Unary Operators (++, --)
//  Predict the output of:
let x = 5;
// x++ is post-increment.
// It returns the current value first, then increases it by 1.
// So it prints 5, then x becomes 6.
// console.log(x++);
// ++x is pre-increment.
// It increases x first, then returns the new value.
// Right now x was 6, so it becomes 7, then prints 7.
// console.log(++x);

// console.log(--x); //6
// console.log(x--);// 6
// console.log(x); //5

// Write a loop using ++ to print numbers from 1 to 5.

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// If y = 10, what will be the value of z in:
let y = 10;
let z = y++ + ++y;
// console.log(z); //22