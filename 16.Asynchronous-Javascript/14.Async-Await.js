//when someone told us make a promise function then what we will do ?
//then we will make a function like this:

function myPromise() {
    return Promise.resolve("test value");
}
//but in javascript we have a by default keyword thats can transform any function to a promise
//that key called async like and if we don't anything even then  this function will be a Promise like:

//Basic definition async function
async function test() {
    //if we didn't give any return statement it will give us a resolved promise
    return "text";
}

// test().then((v) => alert(v));
//async function make easier to work with Promise

//we can do more with async function

//simple Promise function
let p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "test value");
});
//when we have to resolved it we do this:

// function myAsyncFunc() {
//     p1.then((v) => console.log(v));
// }

//but we have a good solution
//when at fast a function we write async that time it become async function
//into the function where we write await key there the function will stop and wait for resolve the promise
//by declaring the async func and give it await key we didn't have to white .then and .catch like:

async function myAsyncFunc() {
    let v = await p1;
    console.log(v);
}

myAsyncFunc();

//To learn more efficiently we will work with fetch api

//we work extra try catch method

async function fetchData() {
    try {
        let res = await fetch("http://jsonplaceholder.typicode.com/users");
        let data = await res.json();

        // console.log(data); wow its work

        let names = data.map((u) => u.name);
        console.log(names);
    } catch (error) {
        console.log(error.message);
    }
}

fetchData();

//another

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
async function promiseAll() {
    let result = await Promise.all(promises);
    console.log(result);
}

promiseAll();
