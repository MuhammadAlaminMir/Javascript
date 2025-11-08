try {
  // 1. TRY BLOCK: Code that might throw an error is executed here.
  console.log("Entering the 'try' block.");
  riskyOperation(); // Let's pretend this function throws an error
  console.log("This line will be skipped if an error occurs.");
} catch (error) {
  // 2. CATCH BLOCK: This code ONLY runs if an error was thrown in the 'try' block.
  // The 'error' object from the 'try' block is passed as an argument.
  console.log("Entering the 'catch' block.");
  console.error("An error was caught:", error.message);
} finally {
  // 3. FINALLY BLOCK: This code ALWAYS runs, no matter what.
  // It runs after the 'try' block succeeds, OR after the 'catch' block handles an error.
  console.log("Entering the 'finally' block. This always executes.");
}

console.log("Execution continues after the try...catch...finally block.");


///Output if riskyOperation() throws an error:
/* 
Entering the 'try' block.
Entering the 'catch' block.
An error was caught: [error message from riskyOperation]
Entering the 'finally' block. This always executes.
Execution continues after the try...catch...finally block.

*/


///Output if riskyOperation() succeeds:
/* 
Entering the 'try' block.
Entering the 'finally' block. This always executes.
Execution continues after the try...catch...finally block.

*/
