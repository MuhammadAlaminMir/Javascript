### 1. Avoid Global Variables

**Why it's a best practice:** Global variables are accessible from *anywhere* in your application. This creates a high risk of naming collisions (two different parts of your code accidentally using the same variable name) and makes it extremely difficult to track where a variable is being changed. It pollutes the global namespace.

### Bad Practice Example

```jsx
// In script.js
let currentUser = "Alice";

// In another-script.js, a different developer writes
let currentUser = "Bob"; // Accidentally overwrites the first one!

function showUser() {
  console.log(currentUser); // Which user does this show? Alice or Bob? It's unpredictable.
}

```

### Good Practice Example

```jsx
// Wrap your code in an IIFE (Immediately Invoked Function Expression) or a module
(function() {
  // This 'currentUser' is now local to this function's scope
  let currentUser = "Alice";

  function showUser() {
    console.log(currentUser); // Always "Alice". Predictable and safe.
  }

  showUser();
})();

```

**Key Takeaway:** Keep variables in the smallest scope possible. Avoid putting anything in the global scope unless it's absolutely necessary.

---

### 2. Always Declare Local Variables

**Why it's a best practice:** This is the other side of the "avoid globals" coin. When you declare a variable (with `let` or `const`), you are explicitly scoping it. Forgetting to declare a variable implicitly creates a global variable, which we just learned is bad.

### Bad Practice Example

```jsx
function getTotal(price, tax) {
  // Whoops! Forgot to declare 'total'
  total = price + tax; // IMPLICITLY CREATES A GLOBAL VARIABLE 'total'
  return total;
}

let finalPrice = getTotal(100, 10);
console.log(window.total); // 110. The variable leaked out of the function!

```

### Good Practice Example

```jsx
function getTotal(price, tax) {
  // 'total' is now properly scoped to this function
  let total = price + tax;
  return total;
}

let finalPrice = getTotal(100, 10);
// console.log(window.total); // undefined. The variable didn't leak.

```

**Key Takeaway:** Always declare your variables with `let`, `const`, or `var`. And use `'use strict';` to catch these mistakes automatically.

---

### 3. Declarations on Top

**Why it's a best practice:** This is about readability and avoiding issues with JavaScript's hoisting. Declaring all your variables at the top of their scope makes it easy to see what variables a function uses at a glance.

### Bad Practice Example

```jsx
function processUser(user) {
  console.log("Processing user...");
  // ... some code ...

  if (user.name) {
    let name = user.name; // Declared deep inside an if-block
    console.log(`Name: ${name}`);
  }

  // ... more code ...

  console.log(`Finalizing ${name}`); // ReferenceError: name is not defined here!
}

```

### Good Practice Example

```jsx
function processUser(user) {
  // All variables are declared at the top. Clear and predictable.
  let name;
  let status;

  console.log("Processing user...");
  if (user.name) {
    name = user.name;
    console.log(`Name: ${name}`);
  }

  status = "Processed";
  console.log(`Finalizing ${name}`); // Works perfectly!
}

```

**Key Takeaway:** Group your variable declarations at the top of their scope to improve readability and prevent hoisting-related bugs.

---

### 4. Initialize Variables

**Why it's a best practice:** An uninitialized variable (e.g., `let myVar;`) has the value `undefined`. Trying to perform operations on an `undefined` variable can lead to `NaN` errors or unexpected results.

### Bad Practice Example

```jsx
function addItem(items, newItem) {
  // 'count' is not initialized
  let count;
  if (items) {
    count = items.length;
  }
  // What if 'items' is empty? 'count' is still undefined.
  console.log(`Item count is ${count}`); // "Item count is undefined"
  return count + 1; // NaN (undefined + 1)
}

```

### Good Practice Example

```jsx
function addItem(items, newItem) {
  // Initialize with a sensible default value
  let count = 0; // or let count = items.length || 0;
  if (items) {
    count = items.length;
  }
  console.log(`Item count is ${count}`); // "Item count is 0" (or the actual count)
  return count + 1; // 1 (or actual count + 1)
}

```

**Key Takeaway:** Always give your variables a starting value to avoid `undefined`-related bugs.

---

### 5. Re-Declaring JavaScript Variables

**Why it's a best practice:** You've already learned about `let`, `const`, and `var`. The modern best practice is to be intentional and choose the right one for the job.

### Bad Practice Example

```jsx
var counter = 0; // Why use var? It has function scope and can be re-declared.
var userName = "Bob"; // This is not a constant, it could be changed.

// Later in the code...
counter = "five"; // No error! But this is not what we intended.

```

### Good Practice Example

```jsx
const API_URL = "<https://api.example.com>"; // A constant that will never change.
let counter = 0; // A variable that will be reassigned.
let isLoggedIn = false; // Another variable that will change state.

// Later in the code...
// counter = "five"; // TypeError: Assignment to constant variable. (If we used const)
// This prevents accidental reassignment of constants.

```

**Key Takeaway:** Use `const` by default. Use `let` only when you know a variable needs to be reassigned. Avoid `var`.

---

### 6. Don't Use `new Object()` for Primitive Types

**Why it's a best practice:** Creating string, number, or boolean objects with `new` is confusing, inefficient, and can have unexpected behavior (e.g., `typeof new String("hello")` is `"object"`, not `"string"`).

### Bad Practice Example

```jsx
let myString = new String("Hello");
let myNumber = new Number(123);

console.log(typeof myString); // "object"
console.log(myString === "Hello"); // false! They are not the same type.

if (myString) {
  // This is always true, even for an empty string!
}

```

### Good Practice Example

```jsx
let myString = "Hello"; // Use the literal
let myNumber = 123; // Use the literal

console.log(typeof myString); // "string"
console.log(myString === "Hello"); // true. Predictable.

if (myString) {
  // This works as expected with truthy/falsy rules.
}

```

**Key Takeaway:** Always use the literal syntax (`"hello"`, `123`, `true`) for primitive types.

---

### 7. Beware of Automatic Type Conversions

**Why it's a best practice:** JavaScript's automatic type coercion can lead to very confusing bugs, especially with `==` and the `+` operator. Being explicit prevents these bugs.

### Bad Practice Example

```jsx
function checkAge(age) {
  // DANGER! 'age' might be a string from an input field
  if (age == 18) { // Using == allows coercion
    console.log("You can vote!");
  }
}

checkAge("18"); // Works, but it's fragile.
checkAge(" 18 "); // Also works, but is that what you want?

console.log("5" + 5); // "55" (String concatenation)
console.log("5" - 5); // 0 (Number subtraction)

```

### Good Practice Example

```jsx
function checkAge(age) {
  // Convert explicitly and use strict comparison
  const ageAsNumber = Number(age);
  if (ageAsNumber === 18) { // Using === prevents coercion
    console.log("You can vote!");
  }
}

checkAge("18"); // Works as expected.
checkAge(" 18 "); // Fails as expected. The input is not a clean number.

console.log(Number("5") + 5); // 10 (Explicit number addition)

```

**Key Takeaway:** Be explicit with your types. Use `===` and convert types manually when needed.

---

### 8. Use `===` Comparison

**Why it's a best practice:** As mentioned above, the strict equality operator (`===`) checks for both value *and* type without coercion. The loose equality operator (`==`) can lead to unpredictable results.

### Bad Practice Example

```jsx
console.log(0 == false);   // true (0 is falsy)
console.log("" == 0);      // true (empty string is falsy)
console.log(null == undefined); // true (a special case)
// These results are often not what you intended.

```

### Good Practice Example

```jsx
console.log(0 === false);   // false (a number is not a boolean)
console.log("" === 0);      // false (a string is not a number)
console.log(null === undefined); // false (different types)
// These results are predictable and safe.

```

**Key Takeaway:** Always use `===` and `!==` unless you have a specific reason to use `==`.

---

### 9. Use Parameter Defaults

**Why it's a best practice:** Functions often rely on arguments being passed. If an argument is omitted, it becomes `undefined`, which can break your function. Providing a default value makes your function more robust.

### Bad Practice Example

```jsx
function greet(name, message) {
  // If 'message' is not provided, it's undefined.
  console.log(`${message}, ${name}!`);
}

greet("Alice", "Welcome"); // "Welcome, Alice!"
greet("Bob"); // "undefined, Bob!" - Not a friendly greeting.

```

### Good Practice Example

```jsx
// Modern ES6 default parameters are clean and clear
function greet(name, message = "Hello") {
  // If 'message' is not provided, it defaults to "Hello".
  console.log(`${message}, ${name}!`);
}

greet("Alice", "Welcome"); // "Welcome, Alice!"
greet("Bob"); // "Hello, Bob!" - A sensible default.

// Old ES5 way (for reference)
function greetOld(name, message) {
  message = message || "Hello"; // Fallback if falsy
  console.log(`${message}, ${name}!`);
}

```

**Key Takeaway:** Use ES6 default parameters (`param = defaultValue`) to make your functions safer and more self-documenting.

---

### 10. End Your Switches with Defaults

**Why it's a best practice:** In a `switch` statement, if a case matches, execution "falls through" to the next case unless you use `break`. Forgetting a `break` is a very common source of bugs.

### Bad Practice Example

```jsx
function getRole(role) {
  switch (role) {
    case "admin":
      console.log("Full access");
      // Whoops! Forgot 'break'
    case "editor":
      console.log("Edit access");
      break;
    default:
      console.log("Read access");
  }
}

getRole("admin"); // Logs "Full access" AND "Edit access". Bug!

```

### Good Practice Example

```jsx
function getRole(role) {
  switch (role) {
    case "admin":
      console.log("Full access");
      break; // Exit the switch after this case
    case "editor":
      console.log("Edit access");
      break;
    default:
      console.log("Read access");
  }
}

getRole("admin"); // Logs only "Full access". Correct.

```

**Key Takeaway:** Always end your `case` blocks with a `break`, unless you intentionally want to "fall through".

---

### 11. Avoid Using `eval()`

**Why it's a best practice:** `eval()` is a function that executes a string as JavaScript code. It is extremely dangerous because it can execute any malicious code passed to it and is also very slow. It also makes code impossible to debug and optimize.

### Bad Practice Example

```jsx
let userInput = "alert('I am a malicious script!')";
eval(userInput); // Executes the alert! A huge security hole.

```

### Good Practice Example

```jsx
// Instead of eval, find a safer, more specific solution.
// For example, if you need to access a property by a dynamic key:
let obj = { a: 1, b: 2 };
let propName = "a";

// Bad: eval(`obj.${propName}`) // 1
// Good: obj[propName] // 1

// If you need to parse JSON:
let jsonString = '{"name": "Bob"}';
// Bad: eval(`(${jsonString})`) // Dangerous
// Good: JSON.parse(jsonString) // Safe and fast

```

**Key Takeaway:** There is almost never a good reason to use `eval()`. Find a safer alternative.