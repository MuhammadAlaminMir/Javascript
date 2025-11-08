//remove a property in object
// to remove a property in an object, there are two common approaches:
// 1. Setting the property to undefined
// 2. Using the delete operator
// The delete operator removes a property from an object if it exists.

var point = {
  x: 10,
  y: 20,
  z: 30,
};
point.a = undefined;
// or
delete point.a;
console.log(point);
