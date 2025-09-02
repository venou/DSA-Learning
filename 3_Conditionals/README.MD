# Conditionals in JavaScript

Conditionals in JavaScript allow you to **make decisions in your code**.  
They check whether a condition is `true` or `false` and then execute different blocks of code accordingly.

---

## Types of Conditionals

### 1. if statement
```js
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```
### 2. if...else
```js
let age = 16;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```
### 3. if...else if...else
```js
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```
### 4. Ternary Operator (? :)
```js
let num = 5;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // Odd
```
### 5. switch statement
```js
let day = 3;

switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}
```