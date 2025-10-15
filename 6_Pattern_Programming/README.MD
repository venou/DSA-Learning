# Pattern Programming Notes - JavaScript

## 📚 Table of Contents

1. [Basic Input/Output](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)
2. [Pattern 1: Square/Rectangle Pattern](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)
3. [Pattern 2: Right Angle Triangle (Stars)](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)
4. [Pattern 3: Right Angle Triangle (Numbers)](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)
5. [Pattern 4: Right Angle Triangle (Alphabets)](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)
6. [Pattern 5: Inverted Right Angle Triangle](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)
7. [Pattern 6: Right Aligned Triangle](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)
8. [Pattern 7: X Pattern (Diagonal Cross)](https://www.notion.so/DSA-With-JavaScript-2884417ba6a6801abae7eabce07672a4?pvs=21)

---

## Basic Input/Output

### Code Snippet

```jsx
let prompt = require("prompt-sync")();
let name = prompt("Enter Your Name: ");
console.log("Hello " + name);

```

### Logic Explanation

- **`prompt-sync`**: Used to take user input in Node.js
- **`console.log()`**: Prints output WITH a newline
- **Installation required**: `npm install prompt-sync`

---

## Pattern 1: Square/Rectangle Pattern

### Output Example (n=5)

```
*****
*****
*****
*****
*****

```

### Code

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("*");
  }
  console.log();
}

```

### Logic Breakdown

1. **Outer Loop (i)**: Controls rows (runs n times)
2. **Inner Loop (j)**: Controls columns (prints n stars per row)
3. **console.log()**: Moves to next line after each row

### Key Formula

- **Rows**: n
- **Columns per row**: n
- **Total stars**: n × n

---

## Pattern 2: Right Angle Triangle (Stars)

### Output Example (n=5)

```
*
**
***
****
*****

```

### Code

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

```

### Logic Breakdown

1. **Outer Loop (i)**: Row number (1 to n)
2. **Inner Loop (j)**: Runs from 1 to **i** (not n!)
3. **Key Insight**: Row 1 prints 1 star, Row 2 prints 2 stars, etc.

### Pattern Analysis

| Row (i) | Stars Printed | Inner Loop Runs |
| --- | --- | --- |
| 1 | * | 1 time |
| 2 | ** | 2 times |
| 3 | *** | 3 times |
| 4 | **** | 4 times |
| 5 | ***** | 5 times |

---

## Pattern 3: Right Angle Triangle (Numbers)

### Output Example (n=5)

```
1
12
123
1234
12345

```

### Code

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j.toString());
  }
  console.log();
}

```

### Logic Breakdown

1. Same structure as Pattern 2
2. **Key Difference**: Print **j** instead of "*"
3. **j** represents column number (1, 2, 3, ...)

### Variable Usage

- **i**: Current row number
- **j**: Current column number (also the number being printed)

---

## Pattern 4: Right Angle Triangle (Alphabets)

### Output Example (n=5)

```
A
AB
ABC
ABCD
ABCDE

```

### Code (Version 1 - Reset each row)

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  let ascii = 65; // Reset to 'A' for each row
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii));
    ascii++;
  }
  console.log();
}

```

### Code (Version 2 - Mathematical approach)

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j));
  }
  console.log();
}

```

### Logic Breakdown

1. **ASCII Code 65**: Represents 'A'
2. **String.fromCharCode()**: Converts ASCII number to character

### ASCII Reference

| Letter | ASCII Code |
| --- | --- |
| A | 65 |
| B | 66 |
| C | 67 |
| D | 68 |
| Z | 90 |

### Key Concept

- Version 1: ASCII must be **reset** for each new row (inside outer loop)
- Version 2: Use mathematical relationship `64 + j`

---

## Pattern 5: Inverted Right Angle Triangle

### Output Example (n=5)

```
*****
****
***
**
*

```

### Code (Version 1 - Decrementing count)

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}

```

### Code (Version 2 - Reverse iteration)

```jsx
let n = 5;
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

```

### Logic Breakdown - Version 1

1. **Formula**: `n - i + 1`
    - Row 1: 5 - 1 + 1 = 5 stars
    - Row 2: 5 - 2 + 1 = 4 stars
    - Row 3: 5 - 3 + 1 = 3 stars
    - Row 5: 5 - 5 + 1 = 1 star

### Logic Breakdown - Version 2

1. **Outer loop starts from n and decrements**
2. **Inner loop runs i times**
3. **Dry Run** (when n=5):
    - Row 1 (i=5): j runs 5 times → 5 stars
    - Row 2 (i=4): j runs 4 times → 4 stars
    - Row 5 (i=1): j runs 1 time → 1 star

### Comparison

| Row | Version 1 Formula | Version 2 i value | Stars |
| --- | --- | --- | --- |
| 1 | 5-1+1 = 5 | i=5 | 5 |
| 2 | 5-2+1 = 4 | i=4 | 4 |
| 3 | 5-3+1 = 3 | i=3 | 3 |
| 4 | 5-4+1 = 2 | i=2 | 2 |
| 5 | 5-5+1 = 1 | i=1 | 1 |

---

## Pattern 6: Right Aligned Triangle

### Output Example (n=5)

```
    *
   **
  ***
 ****
*****

```

### Code

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  // Print spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  // Print stars
  for (let k = 1; k <= i; k++) {
    process.stdout.write("*");
  }
  console.log();
}

```

### Logic Breakdown

1. **Two inner loops per row**:
    - **First loop**: Prints spaces (for right alignment)
    - **Second loop**: Prints stars
2. **Space Formula**: `n - i`
    - Row 1: 5 - 1 = 4 spaces
    - Row 2: 5 - 2 = 3 spaces
    - Row 5: 5 - 5 = 0 spaces
3. **Star Count**: Equal to row number (i)

### Detailed Dry Run (n=5)

| Row (i) | Spaces (n-i) | Stars (i) | Output |
| --- | --- | --- | --- |
| 1 | 4 | 1 | `*` |
| 2 | 3 | 2 | `**` |
| 3 | 2 | 3 | `***` |
| 4 | 1 | 4 | `****` |
| 5 | 0 | 5 | `*****` |

### Key Insight

- **Spaces + Stars = n** (constant width)
- As spaces decrease, stars increase
- Creates right-aligned appearance

---

## Pattern 7: X Pattern (Diagonal Cross)

### Output Example (n=5)

```
*   *
 * *
  *
 * *
*   *

```

### Output Example (n=7)

```
*     *
 *   *
  * *
   *
  * *
 *   *
*     *

```

### Code

```jsx
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === n + 1) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}

```

### Logic Breakdown

This pattern uses **conditional logic** to print stars only at diagonal positions.

### Two Key Conditions:

1. **`i === j`** → **Main Diagonal** (top-left to bottom-right)
    - When row number equals column number
    - Positions: (1,1), (2,2), (3,3), (4,4), (5,5)
2. **`i + j === n + 1`** → **Anti-Diagonal** (top-right to bottom-left)
    - When sum of row and column equals n+1
    - For n=5: i + j should equal 6
    - Positions: (1,5), (2,4), (3,3), (4,2), (5,1)

### Detailed Dry Run (n=5)

| Row (i) | Col (j) | i==j? | i+j==6? | Print | Position |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | ✓ | ✗ | * | Main diagonal |
| 1 | 2 | ✗ | ✗ | space | - |
| 1 | 3 | ✗ | ✗ | space | - |
| 1 | 4 | ✗ | ✗ | space | - |
| 1 | 5 | ✗ | ✓ | * | Anti-diagonal |
| 2 | 1 | ✗ | ✗ | space | - |
| 2 | 2 | ✓ | ✗ | * | Main diagonal |
| 2 | 3 | ✗ | ✗ | space | - |
| 2 | 4 | ✗ | ✓ | * | Anti-diagonal |
| 2 | 5 | ✗ | ✗ | space | - |
| 3 | 3 | ✓ | ✓ | * | **Both diagonals!** |

### Mathematical Analysis

### Main Diagonal Formula: `i === j`

| Position | i | j | Condition |
| --- | --- | --- | --- |
| (1,1) | 1 | 1 | 1 == 1 ✓ |
| (2,2) | 2 | 2 | 2 == 2 ✓ |
| (3,3) | 3 | 3 | 3 == 3 ✓ |
| (4,4) | 4 | 4 | 4 == 4 ✓ |
| (5,5) | 5 | 5 | 5 == 5 ✓ |

### Anti-Diagonal Formula: `i + j === n + 1` (for n=5, equals 6)

| Position | i | j | i+j | Condition |
| --- | --- | --- | --- | --- |
| (1,5) | 1 | 5 | 6 | 6 == 6 ✓ |
| (2,4) | 2 | 4 | 6 | 6 == 6 ✓ |
| (3,3) | 3 | 3 | 6 | 6 == 6 ✓ |
| (4,2) | 4 | 2 | 6 | 6 == 6 ✓ |
| (5,1) | 5 | 1 | 6 | 6 == 6 ✓ |

### Key Observations

1. **Center Point**: When n is odd, both diagonals intersect at center
    - Both conditions are true: `i == j` AND `i + j == n + 1`
2. **Logical OR (`||`)**: Star prints if **either** condition is true
    - If both conditions false → print space

### Pattern Properties

- **Symmetry**: Pattern is symmetric along both diagonals
- **Stars per row**: Exactly 2 stars (except center row for odd n)
- **Total stars**:
    - If n is odd: `2n - 1` stars (center counted once)
    - If n is even: `2n` stars (no overlap)

### Common Mistakes & Tips

❌ **Mistake**: Using `=` instead of `===` for comparison

```jsx
// Wrong - assignment instead of comparison
if (i = j)

```

✅ **Correct**: Use strict equality

```jsx
if (i === j)

```

❌ **Mistake**: Wrong anti-diagonal formula

```jsx
// Wrong formulas
if (i + j == n)      // Off by 1
if (i + j == n - 1)  // Off by 2

```

✅ **Correct**: Always use `n + 1`

```jsx
if (i + j === n + 1)

```

---

## 🎯 Important Concepts Used

### 1. Nested Loops

- **Outer loop**: Controls rows
- **Inner loop**: Controls columns/elements per row

### 2. Loop Relationships

- `j <= i`: Increasing pattern (triangle)
- `j <= n - i + 1`: Decreasing pattern (inverted triangle)
- `j <= n - i`: For spacing before stars

### 3. Output Methods

- **`process.stdout.write()`**: Print without newline
- **`console.log()`**: Print with newline (row break)

### 4. ASCII Manipulation

- `String.fromCharCode(ascii)`: Convert number to character
- Start from 65 for uppercase letters (A-Z)

### 5. Conditional Patterns

- Use logical conditions (`i === j`, `i + j === n + 1`) for complex patterns
- Combine multiple conditions with `||` (OR)

---

## 💡 Pro Tips

1. **Dry Run**: Always trace first 2-3 iterations on paper
2. **Variable Naming**: Use meaningful names (i=row, j=column)
3. **Pattern Formula**: Identify relationship between row number and elements printed
4. **Debugging**: Add temporary console logs to understand loop behavior
5. **Modularity**: Break complex patterns into multiple simpler loops

---

## 🔥 Practice Challenges

Try modifying these patterns to create:

1. **Hollow Square** (stars only on borders)
2. **Pyramid Pattern** (centered triangle)
3. **Diamond Pattern** (combine triangle + inverted triangle)
4. **Number Pyramid** with repeated numbers per row
5. **Plus (+) Pattern** (middle row and middle column)
6. **Hollow X Pattern** (X with hollow center)
7. **Spiral Pattern** (numbers in spiral order)
8. **Pascal's Triangle** (binomial coefficients)

### Quick Challenge Solutions:

**Hollow Square (n=5):**

```jsx
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}

```

**Plus Pattern (n=5):**

```jsx
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === Math.ceil(n/2) || j === Math.ceil(n/2)) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}

```

## Key Corrections Made:

1. **Fixed Output Methods**: Used `console.log()` instead of `process.stdout.write()` for final output in basic I/O
2. **Corrected Pattern 3**: Removed extra spaces between numbers
3. **Fixed Pattern 4**: Corrected alphabet pattern formatting
4. **Improved Pattern 6**: Used separate variables for spaces and stars loops
5. **Enhanced Pattern 7**: Fixed spacing issues in X pattern
6. **Added Installation Note**: Mentioned `npm install prompt-sync` requirement
7. **Improved Code Readability**: Better variable naming and comments
8. **Added Practice Challenges**: With example solutions

These notes now provide accurate, working code examples and clear explanations for each pattern!