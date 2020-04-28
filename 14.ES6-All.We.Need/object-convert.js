//in old javascript we can convert an object to an array with the help of Object.entries method
//example

let obj = {
    a: 10,
    b: 20,
};

console.log(Object.entries(obj));

//but in es6 we can also convert an array to an object whit the help of fromEntries method
//example

let arr = [
    ["a", 10],
    ["b", 20],
];

console.log(Object.fromEntries(arr));
