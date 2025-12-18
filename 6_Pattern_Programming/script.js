// let prompt = require("prompt-sync")();
// let name = prompt(" Enter Your Name ");
// process.stdout.write("Hello " + name);

// Base Pattern
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your number "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Right Angle Triangle
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your number "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// let n = Number(prompt("Enter your number "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

// Right Angle Triangle in Alphabets

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter Your Number "));

// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

// Inverted Right Angle Triangle in Alphabets

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your Number "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Inverted Right Angle Triangle in Alphabets

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your Number "));

// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {       // task dry run
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Right  Triangle

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your Number "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(" *");
//   }
//   console.log();
// }

// x Pattern

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your Number "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else process.stdout.write(" ");
//   }
//   console.log();
// }

// Base Pattern

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n; j++) {
//         row = row + "*"
//     }
//     console.log(row)
// }

// Right Angle

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }


// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//         row = row + (j + 1)
//     }
//     console.log(row)
// }


// 1
// 22
// 333
// 4444
// 55555

// let n = 5;

// for (let i = 0; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//         row = row + i
//     }
//     console.log(row)
// }


