// Reverse an Array
//[1, 2, 3, 4, 5]

var arr = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < arr.length / 2; i++) {
  var tamp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = tamp;
}
console.log(arr); //complicate reversing algorithm

console.log(arr.reverse()); //simple reversing algorithm

// Example of reversing an array using the built-in reverse() method

let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Original:", fruits); // Output: Original: [ "Apple", "Banana", "Cherry", "Date" ]

let reversedFruits = fruits.reverse();

console.log("Reversed:", reversedFruits); // Output: Reversed: [ "Date", "Cherry", "Banana", "Apple" ]
console.log("Original after reverse:", fruits); // Output: Original after reverse: [ "Date", "Cherry", "Banana", "Apple" ]
// The original array `fruits` has been changed.
