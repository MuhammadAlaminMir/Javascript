let num = 123.456;

// toFixed(digits): Formats a number with a fixed number of decimal places (returns a string)
console.log(num.toFixed(2)); // "123.46"

// toPrecision(precision): Formats a number to a specific total length
console.log(num.toPrecision(4)); // "123.5"

// toString(radix): Converts a number to a string. You can specify the base (radix).
console.log((255).toString(16)); // "ff" (hexadecimal)
console.log((255).toString(8)); // "377" (octal)
console.log((8).toString(2)); // "1000" (binary)

// toExponential(): Returns a string in exponential notation
console.log(num.toExponential()); // "1.23456e+2"
