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

// Converting variables to Numbers

console.log(Number("123.45")); // 123.45
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("123abc")); // NaN (not a number)    
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN  
console.log(Number("   123   ")); // 123 (ignores whitespace)

console.log(parseInt("123abc")); // 123 (ignores non-numeric characters)
console.log(parseFloat("123.45abc")); // 123.45 (ignores non-numeric characters)