### 1. The `Error` Object: The Foundation

Before we look at specific types, understand that every error in JavaScript is an **object**. This `Error` object contains three useful properties:

- **`.name`**: The type of error (e.g., `ReferenceError`, `TypeError`).
- **`.message`**: A human-readable description of what went wrong.
- **`.stack`**: A "stack trace" that shows the sequence of function calls that led to the error. This is incredibly useful for debugging.

---

### 2. The Most Common Error Types (The "Big Three")

You will encounter these constantly when you're starting out.

### A. `ReferenceError`

- **What it is:** You are trying to use a variable that **does not exist** or has not been declared.
- **When it happens:**
    - You misspell a variable name.
    - You try to access a variable before it has been declared with `let`, `const`, or `var`.
    - You try to use a variable that is out of scope.

**Code Example:**

```jsx
// Misspelled variable
let myAge = 30;
console.log(myag); // ReferenceError: myag is not defined

// Using a variable before it's declared
console.log(userName); // ReferenceError: Cannot access 'userName' before initialization
let userName = "Alice";

```

### B. `TypeError`

- **What it is:** You are trying to perform an operation on a value of the **wrong data type**.
- **When it happens:**
    - You try to call a non-existent method on a value.
    - You try to treat a non-function as a function.
    - You try to access a property on `null` or `undefined`.

**Code Example:**

```jsx
let name = "Alice";
name.push("Smith"); // TypeError: name.push is not a function (.push is for arrays)

let user = null;
console.log(user.address); // TypeError: Cannot read properties of null (reading 'address')

let data = 123;
data(); // TypeError: data is not a function

```

### C. `SyntaxError`

- **What it is:** You have written code that **violates the grammatical rules** of JavaScript. The engine can't even understand what you've written.
- **When it happens:**
    - Missing a closing bracket `}` or parenthesis `)`.
    - Missing a comma in an array or object.
    - Using an invalid keyword in the wrong place.

**Code Example:**

```jsx
// Missing a closing curly brace
if (true) {
  console.log("This will cause an error"); // SyntaxError: Unexpected end of input

// Missing a comma
let colors = ["red" "green", "blue"]; // SyntaxError: Unexpected string

```

**Key Difference:** `SyntaxError` is caught *before* the code is even run. The other errors happen *during* execution.

---

### 3. Other Specific Error Types

These are less common for beginners but are still important to know.

### D. `RangeError`

- **What it is:** You are trying to use a number that is **outside the allowed range of values**.
- **When it happens:**
    - Creating an array with an invalid length (e.g., a negative number).
    - Calling a number method with an invalid argument.

**Code Example:**

```jsx
// Invalid array length
let arr = new Array(-5); // RangeError: Invalid array length

// Invalid precision for toPrecision()
let num = 123.456;
num.toPrecision(101); // RangeError: toPrecision() argument must be between 1 and 100

```

### E. `URIError`

- **What it is:** An error has occurred in the global URI-handling functions (`encodeURI()`, `decodeURI()`, etc.). This usually means the string being passed is not a valid URI.

**Code Example:**

```jsx
// The '%' character must be followed by two hex digits in a URI
decodeURIComponent('%'); // URIError: URI malformed

```

### F. `EvalError`

- **What it is:** This error used to be related to the `eval()` function.
- **Current Status:** **It is deprecated and no longer thrown in modern JavaScript.** You will likely never see it. It's kept for backwards compatibility.

---

### 4. "Silent Errors" and Handling Errors

Not all problems crash your program. As your image noted, some are "silent." For example, trying to access a property that doesn't exist on an object doesn't throw an error; it just returns `undefined`.

```jsx
let user = { name: "Bob" };
console.log(user.age); // No error! Outputs: undefined

```

But what about the errors that *do* crash your program? You need to handle them gracefully so your application doesn't just stop. The tool for this is `try...catch`.

### The `try...catch` Statement

This structure lets you "try" a block of code that might fail, and "catch" any errors that occur, preventing them from crashing the program.

```jsx
try {
  // 1. TRY: Put the "risky" code here.
  let riskyData = JSON.parse("{ this is not valid JSON }");
  console.log("This line will not be reached.");

} catch (error) {
  // 2. CATCH: If an error happens in the try block, this code runs.
  // The 'error' object is automatically passed here.
  console.error("An error occurred!");
  console.error("Error Name:", error.name); // "SyntaxError"
  console.error("Error Message:", error.message); // "Unexpected token t in JSON at position 2"

} finally {
  // 3. FINALLY: This block ALWAYS runs, whether there was an error or not.
  // Great for cleanup tasks, like closing a file or database connection.
  console.log("The try...catch block has finished.");
}

```

You can also create and `throw` your own errors using the `throw` keyword.

```jsx
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative."); // Create and throw a new error
  }
  console.log("Age is valid.");
}

try {
  checkAge(-5);
} catch (error) {
  console.error(error.message); // "Age cannot be negative."
}

```

---

### Summary Table

| Error Type | Common Cause | Example Code |
| --- | --- | --- |
| **`ReferenceError`** | Using an undeclared variable. | `console.log(myVar);` |
| **`TypeError`** | Wrong operation on a data type. | `null.someProperty;` |
| **`SyntaxError`** | Invalid grammar. | `if (true { console.log('hi');` |
| **`RangeError`** | Number is outside a valid range. | `let a = new Array(-1);` |
| **`URIError`** | Malformed URI string. | `decodeURIComponent('%');` |

Learning to read the error message, identify the type, and locate the line number in the stack trace is one of the most important skills you will develop as a programmer.