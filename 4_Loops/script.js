// Loops
// for-loop

// print 1 to 10.
for (let i = 1; i < 11; i++) {
  //   console.log(i);
}

// 22 to 59
for (let i = 22; i < 60; i++) {
  //   console.log(i);
}

// 200 - 100
for (let i = 200; i > 99; i--) {
  // console.log(i);
}

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
let userInp = prompt("Enter your Number");
if (userInp === null) {
  console.log("Cancelled");
} else {
  let f = Number(userInp);
  if (isNaN(f)) {
    console.log("Invalid Input");
  } else {
    if (f >= 0) {
      let factorial = 1;
      for (let i = 1; i <= f; i++) {
        factorial *= i;
      }
      console.log(factorial);
    } else {
      console.log("Number should be positive or more than 0");
    }
  }
}
