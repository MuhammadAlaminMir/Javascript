//rest operator (...)and Spread Operator(...)
//rest and spread operator looks like the same
//when we use that operator into a function parentheses like a parameter
//that its call rest Operator

//without into a function parameter its called spread operator

//Rest operator
//rest operator is an array like data structure
//when we use rest operator we have to remember that.into the function parameter ...rest operator
//always declare in last or else it can be give us an error
//we can pass any parameter in the fast of the function parentheses

function sum(...rest) {
    return rest.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5, 6));
//

//Sometimes we have break an array to singular object
//in Other time we have break an object to singular property
//that time we can use spread operator

let a = [2, 3, 5];

console.log(...a);
