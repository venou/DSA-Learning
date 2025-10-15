// Loops
// for-loop

// print 1 to 10.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 22 to 59
// for (let i = 22; i < 60; i++) {
//   console.log(i);
// }

// 200 - 100
// for (let i = 200; i > 99; i--) {
//   // console.log(i);
// }

// Sum of n natural numbers
// let userInput = prompt("Enter your nth number");
// if (userInput === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     } else {
//       console.log("number should be positive or more than 0");
//     }
//   }
// }

// Factorial of n number
// let userInp = prompt("Enter your Number");
// if (userInp === null) {
//   console.log("Cancelled");
// } else {
//   let f = Number(userInp);
//   if (isNaN(f)) {
//     console.log("Invalid Input");
//   } else {
//     if (f >= 0) {
//       let factorial = 1;
//       for (let i = 1; i <= f; i++) {
//         factorial *= i;
//       }
//       console.log(factorial);
//     } else {
//       console.log("Number should be positive or more than 0");
//     }
//   }
// }

// Print Factors of a number.
// let userInput = prompt("Enter your number");
// if (userInput === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//     } else {
//       console.log("number should be positive or more than 0");
//     }
//   }
// }
// Check prime number
// let userInput = prompt("Enter your number");

// if (userInput === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(userInput);

//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n > 1) {
//       let isPrime = true;
//       for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         console.log(`${n} is a Prime Number`);
//       } else {
//         console.log(`${n} is NOT a Prime Number`);
//       }
//     } else {
//       console.log("Number should be greater than 1");
//     }
//   }
// }

// Do While Loop

// let i = 1;
// do {
//   console.log("Hello World");
//   i++;
// } while (i <= 10);

// Guess Number

let random = Math.floor(Math.random() * 100) + 1;
let guess = -1;

while (guess !== random) {
  guess = Number(prompt("Guess the Number"));
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Try again between 1 to 100");
    continue;
  }

  if (guess > random) {
    console.log("Too high, try again");
  } else if (guess < random) {
    console.log("Too low, try again");
  } else {
    console.log("Congrats 🎉 You guessed it right!");
  }
}

