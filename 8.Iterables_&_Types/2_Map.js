

const userRoles = new Map();

// Use objects as keys!
userRoles.set(1, "Admin");
userRoles.set(2, "Editor");

console.log(userRoles.get(1)); // Outputs: 'Admin'
console.log(userRoles.get(2)); // Outputs: 'Editor'

// Iterate over map entries using for...of
for (const [user, role] of userRoles) {
  console.log(`${user} is an ${role}`);
}

// using forEach method
userRoles.forEach((role, user) => {
  console.log(`${user} has the role of ${role}`);
});

// Using entries() explicitly
for (const entry of userRoles.entries()) {
  console.log(entry); // entry is [1, 'Admin'], then [2, 'Editor'], etc.
}

// when we need only  values
for (const role of userRoles.values()) {
  console.log(`Role: ${role}`);
}
// Output:
// Role: Admin
// Role: Editor
// Role: Viewer
// when we need only keys
for (const user of userRoles.keys()) {
  console.log(`User ID: ${user}`);
}