// Arrow function is a shorter and simpler version of an actual function.
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => a + b;

// Arrow function with multiple lines needs curly braces and return
const multiply = (x, y) => {
    let result = x * y;
    return result;
};

// Arrow function with single parameter
const square = x => x * x;

// Arrow function with no parameters
const sayHello = () => "Hello World!";

// Example usage
console.log(addArrow(5, 3));     // 8
console.log(multiply(4, 2));      // 8
console.log(square(5));           // 25
console.log(sayHello());          // Hello World!