### What is a Loop and Why Do We Need It?

A loop is a programming structure that repeats a block of code as long as a certain condition is met.

**Why we need them:** To follow the **DRY (Don't Repeat Yourself)** principle. Instead of writing `console.log(i)` 100 times, you can use a loop to do it for you.

---

### 1. The `for` Loop

The `for` loop is the most common loop. It's perfect when you know exactly how many times you want the loop to run.

It has three parts, separated by semicolons, inside its parentheses:
`for (initialization; condition; final-expression)`

- **Initialization:** Runs once at the very beginning to set up a counter variable (e.g., `let i = 0`).
- **Condition:** Checked _before_ each loop iteration. If it's `true`, the loop runs. If it's `false`, the loop stops.
- **Final-Expression:** Runs _after_ each loop iteration, usually to update the counter (e.g., `i++`).

**Example: Looping 5 times**

```jsx
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}
/*
Output:
Iteration number: 0
Iteration number: 1
Iteration number: 2
Iteration number: 3
Iteration number: 4
*/
```

**Example: Looping through an array**

```jsx
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i} is ${fruits[i]}`);
}
```

---

### 2. The `while` Loop

The `while` loop is simpler. It only has a condition. The loop will continue to run as long as the condition remains `true`.

It's best used when you **don't know** how many times you need to loop, but you know the condition that should stop it.

**Syntax:** `while (condition) { ... }`

**Example: A simple counter**

```jsx
let i = 0;
while (i < 5) {
  console.log("While loop iteration: " + i);
  i++; // IMPORTANT: Don't forget to update the condition variable!
}
```

**⚠️ Warning: Infinite Loops!**
If you forget to update the variable inside the loop, the condition will never become false, and you'll create an infinite loop, which will crash your browser tab.

```jsx
// THIS IS AN INFINITE LOOP - DO NOT RUN!
let j = 0;
while (j < 5) {
  console.log("This will run forever!");
  // j++ is missing, so j is always 0, and 0 < 5 is always true.
}
```

---

### 3. The `do...while` Loop

This is a variation of the `while` loop. The key difference is that a `do...while` loop will **always run at least once**, because the condition is checked _after_ the loop body executes.

**Syntax:** `do { ... } while (condition);`

**Example:**

```jsx
let i = 10;

do {
  // This block runs ONCE, even though 10 is not less than 5
  console.log("This will run once.");
  i++;
} while (i < 5);

// Output: This will run once.
```

---

### 4. The `for...in` Loop (For Objects)

This loop is designed specifically for iterating over the **keys** (property names) of an object.

**Syntax:** `for (const key in object) { ... }`

**Example:**

```jsx
const person = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

for (const key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}
/*
Output:
Key: name, Value: Alice
Key: age, Value: 30
Key: isAdmin, Value: true
*/
```

**Note:** You can also use it on an array, but it will give you the _indices_ (0, 1, 2), not the values. This is usually not what you want, so avoid using `for...in` on arrays.

---

### 5. The `for...of` Loop (For Arrays & Strings)

This is the modern, preferred way to loop over the **values** of an iterable object like an array, string, or Map.

**Syntax:** `for (const value of iterable) { ... }`

**Example: Looping through an array**

```jsx
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
/*
Output:
apple
banana
cherry
*/
```

**Example: Looping through a string**

```jsx
const greeting = "Hello";

for (const char of greeting) {
  console.log(char);
}
/*
Output:
H
e
l
l
o
*/
```

---

### Control Statements: `break` and `continue`

These statements let you change the normal flow of a loop from inside the loop body.

### `break`

The `break` statement immediately **terminates the loop** and transfers execution to the statement immediately following the loop.

**Use Case:** When you've found what you're looking for and don't need to continue looping.

**Example:** Find the first number greater than 10.

```jsx
const numbers = [2, 5, 8, 12, 3, 20];
let foundNumber;

for (const num of numbers) {
  console.log("Checking number:", num);
  if (num > 10) {
    foundNumber = num;
    break; // Exit the loop immediately!
  }
}

console.log("The first number greater than 10 is:", foundNumber);
/*
Output:
Checking number: 2
Checking number: 5
Checking number: 8
Checking number: 12
The first number greater than 10 is: 12
*/
```

### `continue`

The `continue` statement **skips the rest of the current iteration** and immediately jumps to the next one.

**Use Case:** When you want to ignore certain items in a loop but continue processing the rest.

**Example:** Log only the odd numbers.

```jsx
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    // If the number is even, skip it and go to the next iteration
    continue;
  }
  console.log(i); // This line is only reached for odd numbers
}
/*
Output:
1
3
5
7
9
*/
```

---

### Summary: Which Loop Should I Use?

| Loop Type        | Best Use Case                                                        | Key Feature                                                 |
| ---------------- | -------------------------------------------------------------------- | ----------------------------------------------------------- |
| **`for`**        | When you know the number of iterations.                              | Full control over initialization, condition, and increment. |
| **`while`**      | When you don't know the iterations, but have a clear stop condition. | Condition is checked _before_ the loop runs.                |
| **`do...while`** | When you need the loop to run at least once.                         | Condition is checked _after_ the loop runs.                 |
| **`for...in`**   | Iterating over the **keys** of an object.                            | Gives you property names.                                   |
| **`for...of`**   | Iterating over the **values** of an array or string.                 | The modern, clean way to loop through collections.          |
