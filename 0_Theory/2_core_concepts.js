// Core Features of JavaScript:

/* 
  JavaScript can change HTML content, attributes, and styles.
  It can also handle events, validate forms, and communicate with servers asynchronously (AJAX).
  In js single quote and double quote both are used to represent string data type.
*/

/**
  High-Level:
  Abstraction of low-level hardware details, enabling developers to focus on
  application logic with a more human-readable syntax. Manages memory (via
  garbage collection) implicitly.
 */

/**
  Interpreted:
  Code execution occurs line by line by the JavaScript engine at runtime. No
  separate compilation phase. Facilitates rapid development and testing.
 */

/**
  Dynamically Typed:
  Variable data types are determined at runtime based on the assigned value.
  Type of a variable can be mutated during program execution.
 *
  Example:
  let x = 10;     // Type: Number
  x = "Hello";  // Type: String
 */

/**
  Weakly Typed:
  Permits implicit type coercion during operations involving different data
  types. While offering flexibility, it necessitates careful handling to avoid
  unexpected behavior. Strict equality (`===`) avoids type coercion.
 *
  Example:
  console.log(5 + "5");   // "55" (String concatenation after Number coercion)
  console.log(5 == "5");    // true (String "5" coerced to Number 5 for comparison)
  console.log(5 === "5");   // false (No coercion; type mismatch)
 */

/**
  Prototype-Based Inheritance:
  Objects inherit properties and methods from other objects via prototypes.
  Every object has an internal [[Prototype]] link. ES6 `class` syntax provides
  syntactic sugar over this mechanism.
 */

/**
  First-Class Functions:
  Functions are treated as objects. They can be:
  - Assigned to variables.
  - Passed as arguments to other functions (callbacks).
  - Returned from other functions (higher-order functions).
  Fundamental for event handling and asynchronous patterns.
 *
  Example:
  const myFunction = function() { console.log("Function assigned"); };
  function executor(func) { func(); }
  executor(myFunction);
 *
  function factory(greeting) {
  return function(name) { return `${greeting}, ${name}!`; };
  }
  const greetHello = factory("Hello");
  console.log(greetHello("User")); // "Hello, User!"
 */

/**
  Automatic Memory Management (Garbage Collection):
  The JavaScript engine automatically reclaims memory occupied by objects that
  are no longer reachable (no references pointing to them), reducing the risk
  of memory leaks.
 */

/**
  Single-Threaded Event Loop Model:
  JavaScript executes on a single thread. Asynchronous operations are handled
  using an event loop. Long-running tasks are offloaded to browser/Node.js APIs.
  Upon completion, callbacks are queued in the event queue. The event loop
  pushes these callbacks onto the call stack when it is empty, enabling
  non-blocking I/O.
 *
  Example:
  console.log("Start");
  setTimeout(() => console.log("Timeout done"), 1000);
  console.log("End"); // "End" executes before "Timeout done"
 */

/**
  Rich Ecosystem:
  A vast collection of frameworks (React, Angular, Vue.js), libraries (Lodash),
  and tools (Webpack, Babel, ESLint) that extend JavaScript's capabilities and
  streamline development workflows.
 */

/**
  Platform Agnostic:
  JavaScript can run in various environments: web browsers (client-side),
  servers (Node.js), mobile (React Native), desktop (Electron), and more,
  providing cross-platform development possibilities.
 */

/**
  Object-Oriented (Multi-Paradigm):
  Supports object-oriented programming principles (encapsulation, abstraction,
  polymorphism) through prototypes and the `class` syntax. Also accommodates
  functional programming paradigms (higher-order functions, closures).
 */
