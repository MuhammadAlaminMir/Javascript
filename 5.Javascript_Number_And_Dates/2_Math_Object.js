// Rounding
console.log(Math.round(4.7)); // 5  (rounds to nearest integer)
console.log(Math.floor(4.7)); // 4  (rounds down)
console.log(Math.ceil(4.2)); // 5  (rounds up)

// Other useful functions
console.log(Math.random()); // A random number between 0 and 1
console.log(Math.random() * 100); // A random number between 0 and 100
console.log(Math.random() * 50 + 50); // A random number between 50 and 100
console.log(Math.max(10, 20, 5)); // 20 (finds the largest)
console.log(Math.min(10, 20, 5)); // 5  (finds the smallest)
console.log(Math.sqrt(64)); // 8  (square root)
console.log(Math.abs(-5)); // 5  (absolute value)
console.log(Math.pow(2, 3)); // 8  (2 to the power of 3)

// we can also use Math object for array operations like finding max and min in an array
var numbers = [10, 5, 20, 15];
console.log(Math.max(...numbers)); // 20
console.log(Math.min(...numbers)); // 5
