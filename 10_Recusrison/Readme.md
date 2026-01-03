# 📘 Recursion – Notes (JavaScript / Programming)

## 1. What is Recursion?

Recursion is a programming technique in which a **function calls itself** to solve a problem by breaking it into **smaller subproblems**.

---

## 2. Mandatory Components of Recursion

Every recursive solution must have **both** of the following:

### a) Base Case

* The condition that **stops** the recursion.
* Prevents infinite function calls.

### b) Recursive Case

* The part where the function **calls itself** with a modified input.

Without a base case → **Stack Overflow Error**.

---

## 3. General Structure of a Recursive Function

```js
function recursiveFunction(input) {
  if (baseCondition) {
    return; // stop recursion
  }
  recursiveFunction(modifiedInput); // recursive call
}
```

---

## 4. Example: Print Numbers from 1 to N

```js
let n = 10;

function printNumbers(x) {
  if (x > n) return;   // base case
  console.log(x);
  printNumbers(x + 1); // recursive call
}

printNumbers(1);
```

---

## 5. How Recursion Works (Conceptually)

* Each function call is stored in the **call stack**.
* The stack grows with every recursive call.
* When the base case is reached, function calls **return one by one**.
* This process is called **stack unwinding**.

---

## 6. Types of Recursion

### 1. Simple / Linear Recursion

Function makes **one recursive call**.

```js
print(x + 1);
```

### 2. Tail Recursion

The recursive call is the **last operation** in the function.

---

## 7. Recursion vs Loop

| Recursion                    | Loop                         |
| ---------------------------- | ---------------------------- |
| Uses call stack              | Uses constant memory         |
| Cleaner for complex problems | Better for simple repetition |
| Risk of stack overflow       | Memory safe                  |

**Note:** Every recursive solution can be written using a loop, but not every loop should be written using recursion.

---

## 8. When to Use Recursion

* Tree and graph traversal
* Divide and conquer algorithms
* Backtracking problems
* Problems with recursive structure

---

## 9. When to Avoid Recursion

* Simple counting or iteration
* Very large input size
* When loop is clearer and safer

---

## 10. Common Mistakes in Recursion

* Missing base case
* Base case never reached
* Changing wrong variable
* Assuming recursion is always better than loops

---

## 11. Key Takeaway

Recursion is powerful but dangerous if misused.
Use it **only when it makes the problem clearer**, not just to look smart.

---

### Brutal reality check

If you can’t:

* trace the call stack
* explain base + recursive case
* convert recursion into a loop

then you **don’t actually understand recursion yet**.

