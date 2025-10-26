
// common JavaScript String methods with clear comments.



// Basic string pieces
const a = "I am ";
const b = "alamin "; // note trailing space for demonstration

// Concatenate two strings
const c = a.concat(b); // "I am alamin "

// Find character at a specific index (0-based)
console.log(c.charAt(5)); // output: "a" (character at index 5)

// Check how the string starts / ends
console.log(c.startsWith("I")); // output: true
console.log(c.endsWith(" "));   // output: true (because b had a trailing space)

// Case conversion
console.log("abc".toUpperCase()); // output: "ABC"
console.log(a.toUpperCase());     // output: "I AM "

console.log("ABC".toLowerCase()); // output: "abc"

// Remove surrounding whitespace
console.log("      alamin   ".trim()); // output: "alamin"

// Split a string into an array by a separator
console.log(c.split(" ")); // output: [ 'I', 'am', 'alamin', '' ] (last empty because of trailing space)

// Search and matching examples
const f = "amer soner  "; // two trailing spaces for demonstration
console.log(f.indexOf("s"));          // output: 5 (first index of "s")
console.log(f.search("soner"));       // output: 5 (position of the match)
console.log(f.match(/s/));            // output: [ 's', index: 5, input: 'amer soner  ', groups: undefined ]

// Using a global regex to get all matches
const arr = f.match(/s/g);
console.log(arr); // output: [ 's', 's' ] (all matches of "s")

// Extract substrings
console.log(f.slice(5, 10));     // output: "soner"
console.log(f.substring(5, 10)); // output: "soner" (similar behavior here)

// Replace (note: replace will only replace the first match for string pattern)
console.log(f.replace("  ", " bangla")); // replaces the double spaces with " bangla"

// Check inclusion of a substring (returns boolean)
const inclu = f.includes("soner"); // true if "soner" appears in f
console.log(inclu); // output: true
