// ====== PRIMITIVE DATA TYPES DEMO ======

// 1. NUMBER: Integers and floats
let age = 25; // Integer
let price = 19.99; // Float
let notANumber = NaN; // Special "Not-a-Number" value
let infinity = Infinity; // Special infinity value

// 2. STRING: Text data (immutable)
let name = "Alice";
let greeting = `Hello, ${name}!`; // Template literal

// 3. BOOLEAN: Logical true/false
let isStudent = true;
let isEmployed = false;

// 4. UNDEFINED: Uninitialized variable
let futureValue; // Automatically undefined
console.log(futureValue); // undefined

// 5. NULL: Intentional absence of value
let emptyValue = null; // Explicitly set to "no value"

// 6. SYMBOL: Unique identifier (ES6)
const id1 = Symbol("user_id");
const id2 = Symbol("user_id");
console.log(id1 === id2); // false (always unique)

// 7. BIGINT: Large integers (ES2020)
const hugeNumber = 9007199254740991n; // 'n' suffix
const anotherBigInt = BigInt("12345678901234567890");

// ====== TYPE CHECKING ======
console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof futureValue); // "undefined"
console.log(typeof emptyValue); // "object" (JS quirk!)
console.log(typeof id1); // "symbol"
console.log(typeof hugeNumber); // "bigint"

// ====== KEY CHARACTERISTICS ======
// 1. IMMUTABILITY: Operations return new values
let text = "hello";
text.toUpperCase(); // Returns "HELLO" (new string)
console.log(text); // Original unchanged: "hello"

// 2. VALUE COMPARISON: Primitives compare by value
let a = 10;
let b = 10;
console.log(a === b); // true (same value)

// 3. SPECIAL BEHAVIORS:
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)
console.log(5 + "5"); // "55" (type coercion)
