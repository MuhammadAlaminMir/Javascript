### 1. Comparison Operators: Asking Questions

Comparison operators are used to compare two values and return a Boolean: `true` or `false`. These are the questions you ask in your code.

| Operator | Name | Example (`x = 5`) | Result | Description |
| --- | --- | --- | --- | --- |
| `===` | Strict Equality | `x === 5` | `true` | **Best Practice.** Checks if value and type are equal. |
| `!==` | Strict Inequality | `x !== "5"` | `true` | Checks if value or type are not equal. |
| `==` | Loose Equality | `x == "5"` | `true` | **Avoid!** Checks if value is equal after type coercion (can cause bugs). |
| `!=` | Loose Inequality | `x != "5"` | `false` | **Avoid!** Checks if value is not equal after type coercion. |
| `>` | Greater Than | `x > 3` | `true` |  |
| `<` | Less Than | `x < 5` | `false` |  |
| `>=` | Greater Than or Equal | `x >= 5` | `true` |  |
| `<=` | Less Than or Equal | `x <= 4` | `false` |  |

**Crucial Point: Always Use `===` and `!==`**

The "loose" operators (`==` and `!=`) can lead to unexpected behavior because they try to convert types before comparing.

```jsx
console.log(5 == "5");    // true (JS converts the string "5" to the number 5)
console.log(5 === "5");   // false (A number is not strictly equal to a string)

console.log(0 == false);  // true (JS converts false to 0)
console.log(0 === false); // false (A number is not strictly equal to a boolean)

```

Using strict equality (`===`) makes your code more predictable and safer.

---

### 2. Logical Operators: Combining Questions

Logical operators allow you to combine multiple comparison expressions.

- `&&` (AND): Returns `true` only if **both** sides are true.
    
    ```jsx
    let age = 25;
    let hasLicense = true;
    console.log(age > 18 && hasLicense); // true (both conditions are true)
    console.log(age > 30 && hasLicense); // false (first condition is false)
    
    ```
    
- `||` (OR): Returns `true` if **at least one** side is true.
    
    ```jsx
    let isWeekend = true;
    let isHoliday = false;
    console.log(isWeekend || isHoliday); // true (first condition is true)
    console.log(isWeekend || isHoliday); // true (second condition is true)
    
    ```
    
- `!` (NOT): Flips a boolean value from `true` to `false`, or `false` to `true`.
    
    ```jsx
    let isRaining = false;
    console.log(!isRaining); // true
    
    ```
    

---

### 3. Conditional Statements: Making Decisions

These are the structures that use your comparisons to decide which code to run.

### A. The `if...else if...else` Statement

This is the most common conditional structure. It runs a block of code if a condition is `true`.

```jsx
let score = 85;

if (score > 90) {
  console.log("Excellent! You got an A.");
} else if (score > 80) {
  console.log("Good job! You got a B.");
} else if (score > 70) {
  console.log("Not bad. You got a C.");
} else {
  console.log("You need to study more.");
}

// Output: "Good job! You got a B."

```

- The code checks the `if` condition first. If it's `false`, it moves to the `else if`.
- It stops and runs the first block whose condition is `true`.
- If none of the `if` or `else if` conditions are `true`, the `else` block is run.

### B. The `switch` Statement

A `switch` statement is a cleaner way to check one variable against many different possible values.

```jsx
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break; // IMPORTANT: 'break' exits the switch block.

  case "Wednesday":
    console.log("Hump day!");
    break;

  case "Friday":
    console.log("TGIF!");
    break;

  default: // Runs if no other case matches
    console.log("It's a regular day.");
    break;
}

```

**Warning:** Forgetting the `break` statement is a common bug. Without it, the code will "fall through" and execute the code for the next case as well.

---

### 4. The Ternary Operator: A Shorthand `if...else`

The ternary operator is a compact, one-line way to write a simple `if...else` statement.

**Syntax:** `condition ? value_if_true : value_if_false`

```jsx
let age = 20;
let message;

// Using a full if...else block
if (age >= 18) {
  message = "You are an adult.";
} else {
  message = "You are a minor.";
}

// Using the ternary operator (same result)
message = (age >= 18) ? "You are an adult." : "You are a minor.";

console.log(message); // Outputs: "You are an adult."

```

---

### 5. Truthy and Falsy Values

This is a key JavaScript concept. In a condition, JavaScript treats certain values as `true` (truthy) and others as `false` (falsy).

**The 6 Falsy Values:**

- `false`
- `0` (the number zero)
- `""` or `''` (empty string)
- `null`
- `undefined`
- `NaN` (Not a Number)

**Everything else is Truthy!** This includes objects (`{}`), arrays (`[]`), non-empty strings, and any non-zero number.

This is why you can write conditions like this:

```jsx
let username = "Alice";

if (username) { // This condition is true because "Alice" is a truthy value
  console.log(`Welcome, ${username}!`);
}

username = ""; // Now it's an empty string (falsy)
if (username) { // This condition is false
  console.log("This will not run.");
}

```

---

### 6. Short-Circuiting

This is a clever trick that uses how `&&` and `||` work with truthy/falsy values.

- `&&` Short-Circuiting: If the left side is falsy, the whole expression is falsy, so JavaScript doesn't even check the right side.
    
    ```jsx
    // Common pattern for setting default values
    let userSettings = null; // Falsy
    let theme = userSettings && "dark-mode"; // Right side is not evaluated
    console.log(theme); // Outputs: null
    
    userSettings = { color: "blue" }; // Truthy
    theme = userSettings && "dark-mode"; // Right side IS evaluated
    console.log(theme); // Outputs: "dark-mode"
    
    ```
    
- `||` Short-Circuiting: If the left side is truthy, the whole expression is truthy, so JavaScript returns the left side's value immediately.
    
    ```jsx
    // The most common use: providing a fallback value
    let userName = ""; // Falsy
    let displayName = userName || "Guest"; // Returns the right side
    console.log(displayName); // Outputs: "Guest"
    
    userName = "Alice"; // Truthy
    displayName = userName || "Guest"; // Returns the left side
    console.log(displayName); // Outputs: "Alice"
    
    ```