console.log(5 + 10 + "5");
// output => 155 just remember js evaluates expressions from left to right

console.log("5" + 5 + 10);
// output => 5510

console.log("Result is: " + 10 + 20);
// Result is: 1020 

console.log("10" - 2);
// 8

console.log("10" + 2 - 1);
// 101

console.log(100 + "5" - 10);
// 995

console.log("hello" - 2);
// idk

console.log("20" * 2);
// 40

console.log("10" / "2");
// 5

console.log("10" + 5 * 2);
// 1010 * has higher precedence

// let a = 30;
// let b = 50;
console.log(a + b + " is Sum of a + b"); // Output: "Sum is: 3050"

let x = 10;
let y = 5;
console.log("Product: " + x * y);
// Output: 50 

console.log(typeof (10 + "5"));
// 105 concat

console.log(typeof ("10" - 5));
// number

console.log(typeof (10 + 5 + "10"));
// string

// 16. Write a code snippet that:
// Takes two numbers a = 5, b = 10

// Prints: The sum of 5 and 10 is 15

// ✅ Your output should be "The sum of 5 and 10 is 15"

let a = 5;
let b = 10;
console.log("The sum of 5 and 10 is: " + (a + b));

