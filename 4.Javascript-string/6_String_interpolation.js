//String Interpolation is a way to embed expressions within string literals, making it easier to create dynamic strings.

// Using Template Literals (backticks) for String Interpolation


const product = "iPhone";
const price = 999;
const quantity = 2;

// Without template literals (messy)
const message =
  "You bought " + quantity + " " + product + " for $" + price * quantity;

// With template literals (clean)
const messageTL = `You bought ${quantity} ${product} for $${price * quantity}`;
console.log(messageTL); // "You bought 2 iPhone for $1998"


// Multi-line Strings with Template Literals

// Template literal (preserves line breaks)
const addressTL = `123 Main St
Suite 500
New York, NY 10001`;

console.log(addressTL);
// Output:
// 123 Main St
// Suite 500
// New York, NY 10001

// we can use String.raw to create raw string literals

// Access raw string without escape sequence processing
const path = String.raw`C:\Users\John\Documents\file.txt`;
console.log(path); // "C:\Users\John\Documents\file.txt"

// Compare with normal template
const normalPath = `C:\Users\John\Documents\file.txt`;
console.log(normalPath); // "C:UsersJohnDocumentsfile.txt" (incorrect)