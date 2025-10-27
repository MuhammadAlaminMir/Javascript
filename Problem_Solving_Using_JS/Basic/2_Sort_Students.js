// Sort the students array in alphabetical order

const students = ["alamin", "jamal", "kamal", "salam", "balam"];

students.sort();

console.log(students);

// sort students in reverse alphabetical order using sort()
students.sort().reverse();

console.log(students);

// sort students roll number wise
const studentRolls = [23, 45, 12, 67, 34, 89, 10];

studentRolls.sort((a, b) => a - b); // ascending order

console.log(studentRolls);
studentRolls.sort((a, b) => b - a); // descending order

console.log(studentRolls);
