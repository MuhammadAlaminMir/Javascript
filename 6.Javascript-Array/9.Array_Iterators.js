// Our sample data for all examples
const numbers = [14, 55, 12, 45, 92];

// The callback function template
function myFunction(value, index, array) {
  console.log(`Value: ${value}, Index: ${index}`);
  // console.log(array); // Uncomment to see the whole array
  console.log("-----------");
}

// 1. forEach(): Executes a provided function once for each array element.
console.log("forEach:");
numbers.forEach(myFunction);

// 2. map(): Creates a new array populated with the results of calling a provided function on every element.
console.log("map:");
const mappedArray = numbers.map((value, index) => {
  console.log(`Value: ${value}, Index: ${index}`);
  return value * 2; // Example transformation
});
console.log("Mapped Array:", mappedArray);

// 3. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
console.log("filter:");
const filteredArray = numbers.filter((value, index) => {
  console.log(`Value: ${value}, Index: ${index}`);
  return value > 30; // Example condition
});
console.log("Filtered Array:", filteredArray);

// 4. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
console.log("reduce:");
const sum = numbers.reduce((accumulator, value, index) => {
  console.log(`Value: ${value}, Index: ${index}, Accumulator: ${accumulator}`);
  return accumulator + value; // Example reduction
}, 0);
console.log("Sum:", sum);

// 5. some(): Tests whether at least one element in the array passes the test implemented by the provided function.
console.log("some:");
const hasNumber = numbers.sone((value, index) => {
  console.log(`Value: ${value}, Index: ${index}`);
  return value > 90; // Example condition
});
console.log("Has number greater than 90:", hasNumber);

// 6. every(): Tests whether all elements in the array pass the test implemented by the provided function.
console.log("every:");
const allAboveTen = numbers.every((value, index) => {
  console.log(`Value: ${value}, Index: ${index}`);
  return value > 10; // Example condition
});
console.log("All numbers greater than 10:", allAboveTen);
