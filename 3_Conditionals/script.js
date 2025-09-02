// Valid Voter

// let age = Number(prompt("Enter Your Age"));
// if (isNaN(age)) {
//   //isNaN is function It checks whether a value is NaN (“Not a Number”).
//   console.log("Wrong Input");
// } else if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("You cannot vote");
// }

// Shop Discount
// let amount = prompt("Enter your Amout");
// let dis = 0;
// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// }
// console.log(amount - Math.floor((dis * amount) / 100));

// ⚡ Question

// The electricity board charges the following rates for electricity consumption:

// Unit Range	Price per Unit
// up to 100	Rs. 4.2 /unit
// 101 – 200	Rs. 6 /unit
// 201 – 400	Rs. 8 /unit
// more than 400	Rs. 13 /unit

let unit = prompt("Enter Your ElectricCity Unit");
let amount = 0;
if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += unit * 4;
console.log(`Your Electricity Bill is: ${amount}`);
