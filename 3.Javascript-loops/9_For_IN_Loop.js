// for in Loop is used to iterate over the enumerable properties of an object.
// It provides a way to loop through the keys of an object.
// iterates over property names (keys) of an object.
// it helps to access both keys and values of the object.

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


// we can also use for...in with arrays, but it's generally not recommended
const colors = ["red", "green", "blue"];

for (const index in colors) {
  console.log(`Index: ${index}, Color: ${colors[index]}`);
}
// but it's better to use for...of for arrays
