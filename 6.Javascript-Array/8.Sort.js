// Works fine for strings
let fruits = ["Banana", "Apple", "Cherry"];
fruits.sort();
console.log(fruits); // Output: [ "Apple", "Banana", "Cherry" ]

// ⚠️ DOES NOT WORK for numbers as you might expect
let numbers = [10, 5, 40, 25, 100];
numbers.sort();
console.log(numbers); // Output: [ 10, 100, 25, 40, 5 ]
// Why? Because it sorts them as strings: "10", "100", "25", "40", "5"
// To sort numbers correctly, provide a compare function


numbers.sort(function(a, b) {
  return a - b;
});

// Modern ES6 Arrow Function version (shorter and more common)
// numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [ 5, 10, 25, 40, 100 ]

// to sort in descending order
numbers.sort(function(a, b) {
  return b - a;
});