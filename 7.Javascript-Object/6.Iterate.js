//using in operator
// The in operator returns true if the specified property is in the specified object or its prototype chain.
// Example:
let res = "x" in { x: 10, y: 20 };
console.log(res); // true
// or
var obj = {
  x: 30,
  y: 40,
  z: 50,
};
res = "y" in obj;
console.log(res); // true

// we can also use for...in loop to iterate over the properties of an object.
// this loop will iterate over all enumerable properties of the object.
for (var i in obj) {
  console.log(i);
  // but hare we can't use . notation we have to use bracket notation to access the property value.
  console.log(i, ":", obj[i]);
}
