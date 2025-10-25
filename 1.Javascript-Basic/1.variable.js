//variables are named memory locations, which can hold/store different types of data.
//variable is Storage, which Value can be change in future.
//Variable is a container for storing data values. In JavaScript, there are three ways to declare variables: var, let, and const.

//1. var: var is a keyword that is used to declare a variable. It can be re-declared and updated.
//   - Example:
var myName = "Alamin Mir";

// let: let is a keyword that is used to declare a variable. It can be updated but not re-declared in the same scope.
//   - Example:
let age = 25;

// const: const is a keyword that is used to declare a variable. It cannot be updated or re-declared in the same scope.
//   - Example:
const birthYear = 1998;
// const birthYear = 1999; // if you declare it again, then This will throw an error because birthYear is a constant and cannot be re-declared


// you have initialize const variable at the time of declaration
// const pi; // This will throw an error because pi is not initialized

var heKnowProgramming = true;

// if you don't use const, var, or let keyword, then it will be treated as a global variable
// Example:
myName = "John Doe"; // re-assigning a new value to the variable
age = 30; // re-assigning a new value to the variable
// birthYear = 2000; // This will throw an error because birthYear is a constant and cannot be updated

 //if you want to see value in console then type: console.log();
console.log(myName, age, heKnowProgramming);
