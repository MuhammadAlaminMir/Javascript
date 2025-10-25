// ====== OPERATORS DEMO ======

// 1. ARITHMETIC
console.log(5 + 3); // 8 (Addition)
console.log(10 - 4); // 6 (Subtraction)
console.log(3 * 6); // 18 (Multiplication)
console.log(15 / 3); // 5 (Division)
console.log(10 % 3); // 1 (Modulus/Remainder)
console.log(2 ** 3); // 8 (Exponentiation)

// Increment/Decrement
let x = 5;
console.log(x++); // 5 (Returns current value, then increments)
console.log(++x); // 7 (Increments first, then returns)
console.log(x--); // 7 (Returns current value, then decrements)
console.log(--x); // 5 (Decrements first, then returns)

// 2. ASSIGNMENT
let a = 10;
a += 5; // a = a + 5 → 15
a -= 3; // a = a - 3 → 12
a *= 2; // a = a * 2 → 24
a /= 4; // a = a / 4 → 6

// when we use + operator with string then it will concatenate the strings
// ex: "my " + "name" = "my name"
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2; // "Hello, World!"
console.log(greeting);

// Adding number and string will return string
let mixed = "The answer is: " + 42; // "The answer is: 42"

// 3. COMPARISON
console.log(5 == "5"); // true (Loose equality - converts types)
console.log(5 === "5"); // false (Strict equality - checks type)
console.log(5 != "5"); // false (Loose inequality)
console.log(5 !== "5"); // true (Strict inequality)
console.log(10 > 5); // true
console.log(10 >= 10); // true

// 4. LOGICAL
console.log(true && false); // false (AND - both must be true)
console.log(true || false); // true (OR - at least one true)
console.log(!true); // false (NOT - inverts boolean)

// Short-circuiting
console.log(0 || "default"); // "default" (Returns first truthy value)
console.log(0 && "hello"); // 0 (Returns first falsy value)

// 5. UNARY
console.log(+"123"); // 123 (Converts to number)
console.log(-"10"); // -10 (Converts to number and negates)
console.log(typeof 42); // "number" (Type check)
console.log(!true); // false (Logical NOT)

// 6. TERNARY (CONDITIONAL)
let age = 18;
let status = age >= 18 ? "Adult" : "Minor"; // "Adult"

// Nullish Coalescing
let input = "";
let result = input ?? "default"; // "" (only null/undefined trigger default)
let result2 = input || "default"; // "default" (all falsy values trigger)

// 7. OPERATOR PRECEDENCE EXAMPLES
console.log(5 + 3 * 2); // 11 (Multiplication before addition)
console.log((5 + 3) * 2); // 16 (Parentheses override precedence)
console.log(2 ** (3 ** 2)); // 512 (Right-to-left: 2 ** (3 ** 2))
console.log(true || (false && false)); // true (&& before ||)
