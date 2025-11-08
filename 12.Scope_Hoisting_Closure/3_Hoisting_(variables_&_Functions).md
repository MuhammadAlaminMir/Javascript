### 1. What is Hoisting? The Two-Pass Model

Your definition is perfect: **"Hoisting is JavaScript's default behavior of moving declarations to the top."**

To understand *why* this happens, it helps to think about how the JavaScript engine reads your code. It doesn't just read it line-by-line from top to bottom. It does it in two passes:

1. **The Creation Pass (Hoisting):** The engine scans through the entire code and finds all the **declarations** (variables and functions). It allocates memory for them and "hoists" them to the top of their respective scopes.
2. **The Execution Pass:** The engine goes back to the top and executes your code line-by-line, assigning values and running functions.

This is why you can "use" a variable before you "write" its declaration line.

---

### 2. Hoisting with `var`: The Old Way

You are exactly right. With `var`, the declaration is hoisted and it's **automatically initialized with the value `undefined`**.

```jsx
// Example with var
console.log(myVar); // Outputs: undefined (not an error!)

var myVar = "I am now defined";

console.log(myVar); // Outputs: "I am now defined"

```

**What's happening here, step-by-step:**

1. **Creation Pass:** The engine sees `var myVar;` and hoists it to the top of the scope, initializing it as `undefined`.
    
    ```jsx
    // Conceptually, the engine sees this:
    var myVar = undefined;
    
    ```
    
2. **Execution Pass:**
    - `console.log(myVar);` runs, printing the current value, which is `undefined`.
    - `myVar = "I am now defined";` runs, assigning the new value.
    - `console.log(myVar);` runs, printing the new value.

This behavior of `var` can lead to bugs, as you might accidentally use a variable before you intended to give it a real value.

---

### 3. Hoisting with `let` and `const`: The Modern, Safer Way

This is where your understanding of the Temporal Dead Zone comes in. You are correct that `let` and `const` are also hoisted, but they are **not initialized**.

This creates a "safe zone" where you cannot access the variable.

### The Temporal Dead Zone (TDZ)

The TDZ is the time period from when a scope is entered until the `let` or `const` declaration is actually executed in the code. Trying to access the variable during this period results in a `ReferenceError`.

**Example with `let`:**

```jsx
// --- The Temporal Dead Zone for 'myLet' starts here ---

// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization

let myLet = "I am now defined"; // --- The TDZ for 'myLet' ends here ---

console.log(myLet); // Outputs: "I am now defined"

```

The engine knows `myLet` exists because of hoisting, but it puts a "do not touch" sign on it until the line with `let myLet = ...` is executed.

### Clarifying the `const` Error

You mentioned a "syntext error" for `const`. Let's clarify this, as it's a subtle but important distinction.

1. **Accessing a `const` before its declaration line:** This results in a **`ReferenceError`**, just like `let`. The variable is in the TDZ.
    
    ```jsx
    // console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
    const myConst = "I am a constant";
    
    ```
    
2. **Declaring a `const` without an initializer:** This is a **`SyntaxError`**. The syntax of the language requires that a `const` *must* be assigned a value at the exact moment it is declared.
    
    ```jsx
    const anotherConst; // SyntaxError: Missing initializer in const declaration
    
    ```
    

So, the TDZ error is a `ReferenceError`, and the "no-initializer" error is a `SyntaxError`.

---

### 4. Function Hoisting

It's also important to know that **function declarations** are fully hoisted. This means you can call a function before it appears in your code.

```jsx
// Call the function before it's defined
greet("Alice");

function greet(name) {
  console.log("Hello, " + name);
}
// Outputs: "Hello, Alice"

```

**Note:** This only applies to function declarations (`function myFunc() {}`). It does not apply in the same way to function expressions assigned to variables (`const myFunc = function() {}`).

---

### Summary Table: Hoisting Behavior

| Keyword | Is it Hoisted? | Is it Initialized? | Result of Accessing Before Declaration |
| --- | --- | --- | --- |
| **`var`** | Yes | Yes, with `undefined` | `undefined` |
| **`let`** | Yes | No | `ReferenceError` (TDZ) |
| **`const`** | Yes | No | `ReferenceError` (TDZ) |
| **`function`** | Yes | Yes, with the function body itself | Works correctly |

---

### Best Practices to Avoid Hoisting Issues

1. **Always declare your variables at the top of their scope.** This makes your code match what the engine is doing and eliminates any confusion.
2. **Prefer `let` and `const` over `var`.** The TDZ is a safety feature that prevents you from using variables before they are ready, which saves you from bugs.
3. **Always initialize your `const` variables when you declare them.** This is a rule of the language.

Your understanding is excellent. By grasping the TDZ, you've already understood the most important modern concept related to hoisting.

## Function Hoisting

When you call a function with arguments *before* its declaration, it will not behave randomly or return `undefined`. It will execute the function's complete logic with the arguments you provided.

---

### The Detailed Explanation: Why It Works

This is where function hoisting is fundamentally different from `var` hoisting.

- With `var`, only the **declaration** (`var myVar;`) is hoisted and initialized to `undefined`. The **assignment** (`myVar = 5;`) happens later during execution.
- With a **function declaration** (`function myFunc() {}`), the **entire function definition**—its name, its parameters, and its whole body—is hoisted to the top of the scope.

The engine doesn't just know that a function named `greet` exists; it knows everything about it before it starts executing the code line by line.

### Code Example: It Works Flawlessly

```jsx
// 1. We call the function BEFORE its declaration line.
//    We pass it the argument "Alice".
let result = greet("Alice");
console.log(result); // Outputs: "Hello, Alice!"

// 2. Here is the actual function declaration.
//    By the time the engine executed line 1, it already knew this entire function existed.
function greet(name) {
  // The 'name' parameter is correctly assigned the value "Alice"
  return "Hello, " + name + "!";
}

```

**What the engine effectively sees before execution:**

```jsx
// The entire function is hoisted here
function greet(name) {
  return "Hello, " + name + "!";
}

// Then execution begins
let result = greet("Alice");
console.log(result);

```

As you can see, by the time `greet("Alice")` is called, the full function is already available, so it behaves exactly as you would expect.

---

### The Big "Gotcha": Function Expressions vs. Function Declarations

This is the most common source of confusion. The hoisting behavior above **only applies to function declarations**. It does **NOT** apply to function expressions.

### What is a Function Expression?

It's when you define a function and immediately assign it to a variable.

```jsx
// This is a function EXPRESSION
const sayGoodbye = function(name) {
  return "Goodbye, " + name + "!";
};

```

### How Hoisting Works for Function Expressions

When you have a function expression, only the **variable declaration** (`const sayGoodbye;`) is hoisted. The **assignment** of the function to that variable is *not* hoisted.

This means the variable is in the **Temporal Dead Zone (TDZ)** until the assignment line is reached.

### Code Example: The TypeError

```jsx
// 1. We try to call it before the assignment line.
// sayGoodbye("Bob"); // ❌ THIS WILL CAUSE AN ERROR!

// 2. The variable is declared and assigned here.
const sayGoodbye = function(name) {
  return "Goodbye, " + name + "!";
};

```

If you uncomment line 1, you will get a **`TypeError`**, not a `ReferenceError`.

```
TypeError: sayGoodbye is not a function

```

**Why a `TypeError`?**

1. The `const sayGoodbye` variable is hoisted, so it exists.
2. However, it's in the TDZ, so it has no value yet (it's not `undefined`, it's just uninitialized).
3. You are trying to call `sayGoodbye()` as if it were a function.
4. JavaScript throws a `TypeError` because the variable `sayGoodbye` exists, but its current value is *not a function*.

---

### Summary Table: Function Hoisting

| Type | Example | What Gets Hoisted? | Can you call it before its line? |
| --- | --- | --- | --- |
| **Function Declaration** | `function myFunc() {}` | The **entire function definition**. | **Yes**, it works perfectly. |
| **Function Expression** | `const myFunc = function() {}` | Only the **variable declaration** (`const myFunc;`). The function assignment stays in place. | **No**, it will throw a `TypeError`. |

**Key Takeaway:** The ability to call a function before its declaration is a powerful feature, but only for traditional function declarations. For modern code using `const` or `let`, always define your function expressions *before* you try to use them.