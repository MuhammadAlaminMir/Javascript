const roles = new Set(["admin", "editor", "viewer"]);

// Get the values iterator
const valueIterator = roles.values();

// Use it with a for...of loop
console.log("Looping with values():");
for (const role of valueIterator) {
  console.log(role);
}
// Output:
// admin
// editor
// viewer

// Convert the iterator to an array
const rolesArray = [...roles.values()];
console.log(rolesArray); // ['admin', 'editor', 'viewer']


// or use foreach directly on the Set
console.log("Looping with forEach():");
roles.forEach((role) => {
  console.log(role);
}); // output: admin editor viewer