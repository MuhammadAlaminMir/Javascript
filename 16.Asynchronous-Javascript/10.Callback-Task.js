//callback has two task
//callback doesn't means only asynchronous

//when we handling multiply request that time callBack isn't a good solution
//that time promise or Async a wait is a good solution

//1.pass function into a function as a argument
//2.Asynchronous task handle

//passing a callback into a simple function

let arr = [1, 2, 3, 4, 5];

let sqrArr = arr.map((v) => v * v);

console.log(sqrArr);

// passing a callback into a Asynchronous function

// function asyncMap(arr, cb) {
//     return arr.map((v) => {
//         setTimeout(cb, 0);
//     });
// }

// let qbArr = asyncMap(arr, (v) => v * v * v);

// console.log(qbArr);

function asyncMap(arr, cb) {
    return arr.map((v) => {
        setTimeout(cb.bind(null, v), 0);
        // setTimeout(() => cb(v), 0);
    });
}

let qbArr = asyncMap(arr, (v) => {
    console.log(v * v);
});
