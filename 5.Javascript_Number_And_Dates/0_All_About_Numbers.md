### Part 1: The Core Concept - One Number to Rule Them All

In many programming languages, you have different types for numbers (like `int` for integers, `float` or `double` for decimals).

**In JavaScript, there is only one type for all numbers: `Number`.**

This single type can represent both integers (whole numbers) and floating-point numbers (numbers with decimals) behind the scenes. It's a 64-bit floating-point format, as defined by the IEEE 754 standard.

---

### Part 2: Creating Numbers

There are two main ways to create a number in JavaScript.a

### 1. Number Literals (The Common Way)

You just type the number directly into your code.

```jsx
let age = 30; // An integer
let price = 19.99; // A floating-point number
let pi = 3.14; // Another float
let negative = -100; // A negative integer
```

### 2. The `Number()` Constructor (Less Common)

You can also explicitly create a number using the `Number` function. This is most useful for converting other values (like strings) into numbers.

```jsx
let score = new Number(150); // Creates a Number object (avoid this)
let temperature = Number(25); // Creates a primitive number value (good for conversion)

// The 'new' keyword creates an "object wrapper". It's generally not needed and can cause confusion.
// Stick to literals or Number() without 'new'.
console.log(typeof score); // "object"
console.log(typeof temperature); // "number"
```

---

### Part 3: Special Numeric Values

JavaScript has a few special numeric values you **must** know about.

### 1. `Infinity` and `Infinity`

These values represent mathematical infinity. You get them when you divide a number by zero or when a number exceeds the maximum possible value.

```jsx
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity

// A very large number becomes Infinity
let hugeNumber = 1.7976931348623157e308; // Close to the max value
console.log(hugeNumber * 2); // Infinity
```

### 2. `NaN` (Not a Number)

This is a confusing but important value. `NaN` means the result of a mathematical operation is **not a valid number**.

**Crucial Rule:** `NaN` is the _only_ value in JavaScript that is not equal to itself.

```jsx
let result = "hello" * 5; // You can't multiply a string by a number
console.log(result); // NaN

// The weird part:
console.log(NaN === NaN); // false! This is why you need special functions to check for it.
```

---

### Part 4: Number Notations

You can write numbers in different formats.

| Notation        | Example                       | Description                                    |
| --------------- | ----------------------------- | ---------------------------------------------- |
| **Decimal**     | `let n = 25;`                 | The standard way you write numbers.            |
| **Exponential** | `let big = 5e6;` // 5,000,000 | `e` (or `E`) means "times 10 to the power of". |
| **Binary**      | `let bin = 0b1010;` // 10     | Starts with `0b`.                              |
| **Octal**       | `let oct = 0o755;` // 493     | Starts with `0o`.                              |
| **Hexadecimal** | `let hex = 0xFF;` // 255      | Starts with `0x`.                              |

---

### Part 5: Working with Numbers - Operators

### Arithmetic Operators

These are the basics.

```jsx
let a = 10,
  b = 3;

console.log(a + b); // 13  (Addition)
console.log(a - b); // 7   (Subtraction)
console.log(a * b); // 30  (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1   (Modulo / Remainder)
console.log(a ** b); // 1000 (Exponentiation)
```

### Increment and Decrement

Used to add or subtract 1 from a variable.

```jsx
let count = 5;
count++; // count is now 6 (Postfix)
++count; // count is now 7 (Prefix)

count--; // count is now 6 (Postfix)
--count; // count is now 5 (Prefix)

// The difference between prefix and postfix matters in assignments:
let x = 10;
let y = x++; // y gets 10, THEN x becomes 11
console.log(x, y); // 11, 10

let a = 10;
let b = ++a; // a becomes 11, THEN b gets 11
console.log(a, b); // 11, 11
```

---

### Part 6: The `Number` Object - Methods & Properties

The `Number` object has useful built-in properties (constants) and methods (functions).

### Properties (Static)

These are accessed directly on `Number`.

```jsx
console.log(Number.MAX_VALUE); // Largest possible number
console.log(Number.MIN_VALUE); // Smallest positive number
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
```

### Methods (Instance)

These are methods you call _on a specific number variable_.

```jsx
let num = 123.456;

// toFixed(digits): Formats a number with a fixed number of decimal places (returns a string)
console.log(num.toFixed(2)); // "123.46"

// toPrecision(precision): Formats a number to a specific total length
console.log(num.toPrecision(4)); // "123.5"

// toString(radix): Converts a number to a string. You can specify the base (radix).
console.log((255).toString(16)); // "ff" (hexadecimal)
console.log((8).toString(2)); // "1000" (binary)

// toExponential(): Returns a string in exponential notation
console.log(num.toExponential()); // "1.23456e+2"
```

---

### Part 7: The `Math` Object

For more advanced mathematical functions, you use the built-in `Math` object. **Note:** You call methods on `Math` itself, not on your number variable.

```jsx
// Rounding
console.log(Math.round(4.7)); // 5  (rounds to nearest integer)
console.log(Math.floor(4.7)); // 4  (rounds down)
console.log(Math.ceil(4.2)); // 5  (rounds up)

// Other useful functions
console.log(Math.random()); // A random number between 0 and 1
console.log(Math.max(10, 20, 5)); // 20 (finds the largest)
console.log(Math.min(10, 20, 5)); // 5  (finds the smallest)
console.log(Math.sqrt(64)); // 8  (square root)
console.log(Math.abs(-5)); // 5  (absolute value)
console.log(Math.pow(2, 3)); // 8  (2 to the power of 3)
```

---

### Part 8: Type Conversion & Checking

This is one of the most important practical skills.

### Converting _to_ a Number

```jsx
// 1. Number(): The most explicit and recommended way.
console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45
console.log(Number("hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// 2. parseInt(string, radix): Parses a string and returns an INTEGER.
// The 'radix' (base) is crucial! Always use 10 for decimal numbers.
console.log(parseInt("20 years")); // 20
console.log(parseInt("101px", 10)); // 101
console.log(parseInt("101px", 2)); // 5 (because 101 is binary for 5)
console.log(parseInt("hello")); // NaN

// 3. parseFloat(string): Parses a string and returns a FLOAT.
console.log(parseFloat("3.14 meters")); // 3.14

// 4. Unary + Operator: A common shorthand for Number().
console.log(+"50"); // 50
console.log(+"hello"); // NaN
```

### Checking _if_ a value is a Number

```jsx
// 1. typeof: The basic check.
console.log(typeof 123); // "number"
console.log(typeof "123"); // "string"
// BUT:
console.log(typeof NaN); // "number" (This is misleading!)

// 2. isNaN(): Checks if a value is NaN. It does type coercion.
console.log(isNaN("hello")); // true (because "hello" becomes NaN)
console.log(isNaN(123)); // false

// 3. Number.isNaN(): The modern, safer version. No type coercion.
console.log(Number.isNaN("hello")); // false (it's a string, not the NaN value)
console.log(Number.isNaN(NaN)); // true

// 4. Number.isFinite(): The best way to check for a "normal" number.
// It returns true for any number that is not NaN, Infinity, or -Infinity.
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(1.23)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
```

---

### Part 9: Common Pitfalls

### Floating-Point Precision

This is the most famous "gotcha" in JavaScript. Because numbers are stored in binary, some decimal numbers can't be represented perfectly.

```jsx
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.2 + 0.1); // 0.30000000000000004

// How to handle it:
// For display, use toFixed():
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // "0.30"

// For calculations, work with integers and divide at the end.
// (0.1 * 10 + 0.2 * 10) / 10 = 0.3
```

This is why for applications requiring high precision (like financial calculations), developers often use special libraries like `decimal.js`.
