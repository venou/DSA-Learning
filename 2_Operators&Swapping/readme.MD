# Swapping in JavaScript

**Swapping** in JavaScript (or in programming in general) means **exchanging the values of two variables**.

---

## Example

````js
let a = 10;
let b = 20;

console.log("Before swap: a =", a, "b =", b);

// Method 1: Using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("After swap: a =", a, "b =", b);

Ways to Swap in JavaScript
1. Using a Temporary Variable (Classic Way)

let x = 5, y = 10;
let temp = x;
x = y;
y = temp;
console.log(x, y); // 10, 5

2. Using Arithmetic Operators
let x = 5, y = 10;
x = x + y; // 15
y = x - y; // 5
x = x - y; // 10
console.log(x, y); // 10, 5

3. Using Destructuring Assignment (Modern ES6+ ✅)

let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y); // 10, 5

Summary

Swapping = Exchanging values of two variables.

Modern and cleanest way:
[a, b] = [b, a];

# Swapping Practice Questions in JavaScript

## Questions
1. Swap two numbers using a **temporary variable**.
2. Swap two numbers **without using a third variable**.
3. Swap two strings (`"hello"` and `"world"`) using **destructuring assignment**.
4. Swap two boolean values (`true`, `false`).
5. Swap the **first and last element** of an array.
   Example: `[1, 2, 3, 4, 5] → [5, 2, 3, 4, 1]`

6. Swap values at any **two given indexes** in an array.
   Example: Swap index `1` and `3` in `[10, 20, 30, 40] → [10, 40, 30, 20]`

7. Reverse an array by swapping elements.
   Example: `[1, 2, 3, 4] → [4, 3, 2, 1]`

# 🧮 Operators in JavaScript

Operators are symbols that let you perform operations on values (numbers, strings, variables, etc.).

---

## 1. Arithmetic Operators
Used for basic math.

```js
let a = 10, b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33... (Division)
console.log(a % b); // 1 (Modulus → remainder)
console.log(a ** b); // 1000 (Exponentiation → 10³)
````

## 2. Assignment Operators Used to assign values.

```
let x = 5;

x += 2; // 7
x -= 1; // 6
x *= 3; // 18
x /= 2; // 9
x %= 4; // 1
x **= 3; // 1
```

## 3. Comparison Operators Used to compare values (result is true or false).

```
let a = 5, b = "5";

console.log(a == b);  // true  (loose equality)
console.log(a === b); // false (strict equality → type + value)
console.log(a != b);  // false
console.log(a !== b); // true
console.log(a > 3);   // true
console.log(a < 3);   // false
console.log(a >= 5);  // true
console.log(a <= 4);  // false
```

## 4. Logical Operators Used for combining conditions.

```
let age = 20;

console.log(age > 18 && age < 30); // true (AND)
console.log(age > 18 || age < 18); // true (OR)
console.log(!(age > 18));          // false (NOT)
```

## 5. Unary Operators Work on a single value.

```
let x = 5;

console.log(++x); // 6 (pre-increment)
console.log(x++); // 6 (post-increment → now 7)
console.log(--x); // 6 (pre-decrement)
console.log(x--); // 6 (post-decrement → now 5)
console.log(typeof x); // "number"
```

## 6. Ternary Operator (Conditional Operator) Shorthand for if...else.

```
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```

## 7. String Operators

```
let first = "Hello";
let second = "World";

console.log(first + " " + second); // "Hello World"
console.log("5" + 2); // "52"
```

## 8. Bitwise Operators Work on binary numbers.

```
let a = 5;  // 0101
let b = 1;  // 0001

console.log(a & b);  // 1 (AND)
console.log(a | b);  // 5 (OR)
console.log(a ^ b);  // 4 (XOR)
console.log(~a);     // -6 (NOT)
console.log(a << 1); // 10 (Left shift)
console.log(a >> 1); // 2  (Right shift)
```

## 9. Nullish Coalescing Operator (??) Returns right-hand value if left-hand is null or undefined.

```
let name = null;
console.log(name ?? "Guest"); // "Guest"
```

## 10. Optional Chaining (?.) Safely access nested properties.

```
let user = { profile: { name: "Shiva" } };

console.log(user.profile?.name);  // "Shiva"
console.log(user.address?.city);  // undefined
```
# 📝 JavaScript Operators – Practice Questions

## 1. Arithmetic Operators
1. Write a program to calculate the area of a rectangle using `length * width`.
2. Find the remainder when `37` is divided by `6`.
3. Compute `2 ** 5` and explain the result.

---

## 2. Assignment Operators
4. Start with `let x = 10`. Use assignment operators to:
   - Add 5  
   - Multiply by 2  
   - Subtract 4  
   - Divide by 2  
   Print the result after each step.

---

## 3. Comparison Operators
5. Compare `5 == "5"` and `5 === "5"`. Why are they different?  
6. Check if the number `15` is greater than `10` **and** less than `20`.  
7. Check if `"apple"` is not equal to `"orange"`.

---

## 4. Logical Operators
8. Write a condition that checks if a person is eligible to vote:
   - Age must be **18 or more**
   - AND they must be a **citizen** (boolean `true/false`).  
9. Test the output of `true || false && false`. Why?

---

## 5. Unary Operators
10. Show the difference between `++x` and `x++` when `x = 5`.  
11. Use `typeof` to check the type of:
    - `"hello"`
    - `123`
    - `true`

---

## 6. Ternary Operator
12. Write a program that checks if a number is **even** or **odd** using the ternary operator.  
13. If a student’s marks are `>= 40`, print `"Pass"`, otherwise print `"Fail"` using a ternary operator.

---

## 7. String Operators
14. Concatenate `"JavaScript"` and `"Rocks"` with a space in between.  
15. What will `"10" + 20` give? Why?  
16. What will `"10" - 2` give? Why?

---

## 8. Bitwise Operators
17. Evaluate `5 & 3`, `5 | 3`, and `5 ^ 3`. Write the binary representation of each.  
18. What does `5 << 1` and `5 >> 1` return?

---

## 9. Nullish Coalescing (`??`)
19. If `let user = null;`, what will `user ?? "Guest"` return?  
20. If `let age = 0;`, what will `age ?? 18` return? (Be careful: `0` is not null/undefined)

---

## 10. Optional Chaining (`?.`)
21. Given:
```js
let person = {
  name: "Aman",
  address: {
    city: "Delhi"
  }
};
