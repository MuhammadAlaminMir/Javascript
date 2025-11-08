// 1. Define a custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent Error constructor
    this.name = "ValidationError"; // Set a custom name
  }
}

// 2. Use your custom error in a function
function setAge(age) {
  if (!age || age < 0) {
    throw new ValidationError("Age must be a positive number.");
  }
  // ... logic to set the age
}

// 3. Catch your specific error
try {
  setAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation failed: ${error.message}`);
  } else {
    // Handle other unexpected errors
    console.error("An unknown error occurred:", error);
  }
}
