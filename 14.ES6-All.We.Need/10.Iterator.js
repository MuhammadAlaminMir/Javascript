//Iterator
//Iterator basically counting
//Iterator nothing but an object
//which designed for iterate in a collection
//like when we throw loop in an array its a basic level of iteration
//Iterator : its iterate in an object
//Iterable :witch object have on demand iterate accessibility or which object have iterator interface like(array, string , set , mep)

//es6 gives us some easiest way to Iteration
//every iterator has a next method

//

//Old js custom iterator its only work in array

//  const arr = [1, 3, 4];

// function createIterator(collection) {
//     let i = 0;
//     return {
//         next() {
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++],
//             };
//         },
//     };
// }

// let iterate = createIterator(arr);

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

//es6 advanced iterator system****

//any kind of object which has symbol.iterator property its called iterator object
//we can use symbol.iterator to check that any object is iterable or not

const arr = [1, 3, 4];

//console.log(arr[Symbol.iterator]); thats means arr in iterable
//and if call [Symbol.iterator]() function our iteration will start like:

let iterate = arr[Symbol.iterator]();

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

//ha ha its very easy

//we can do it into a string

let str = "text";
let iterateText = str[Symbol.iterator]();

console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
