console.log("5" * 2);
// 10 type number

console.log("10" + 5);
// 105 type string

console.log("5" - 2);
// 3 type number

console.log(true + 1);
// 2 type number

console.log(false + "false");
// 0 type boolean

let age = "18";
console.log(Number(age) + 2);  // Output: 182 ❌

let marks = Number("95");
console.log(typeof marks); // string

let isLoggedIn = 0;
if (isLoggedIn) {
  console.log("User logged in");
}
// false

let input = "";
if (Boolean(input)) {
  console.log("Has value");
} else {
  console.log("Empty");
}
// explain this one

let x = Number("100");
let y = 50;
console.log(x + y);  

console.log(typeof (true + false));
// boolean

console.log(typeof ("10" - 2));
// number

console.log(typeof (10 + "5"));
// string

console.log(typeof Boolean("hello"));
// boolean

console.log(typeof Number("Shiva"));
// NaN

// Take user input as string "30" and add 10 using number casting.

let user1 = "30";
let user2 = 10;
console.log(Number(user1) + user2);

let result = "50" - true;
console.log("50" - true);
// 49

let value = "50px";
console.log(Number(value));
// NaN

let isOnline = String(false);
// convert it to "false"

console.log(Number("   123   ")); // 123
console.log(Number(""));          //0
console.log(Number("hello"));    //Nan
console.log(typeof 0);
