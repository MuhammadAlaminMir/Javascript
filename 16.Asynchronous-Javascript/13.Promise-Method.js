//Promise have some default method or API
//1.resolve
//2.reject
//3.all
//4.race

//at fast we creat a delay Promise function
const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

// delay(5).then(() => console.log("5 seconds delay"));

// //1.resolve is a by default resolve promise
// //its creat an instant resolved promise

// let p1 = Promise.resolve("test");
// p1.then((v) => console.log(v));

// //1.reject is a by default reject promise
// //its creat an instant rejected promise

// let p2 = Promise.reject("Reject");
// p2.then((e) => console.log(e));

//think that we have more then 1 promise
//and we need to resolve it same time that time we will use promise.all
//in hare if any promise get reject all will be rejected
//but at fast we have to make an arr like :

let p1 = new Promise((resolve) => setTimeout(resolve, 3000, "one"));

let p2 = new Promise((resolve) => setTimeout(resolve, 5000, "two"));

let p3 = new Promise((resolve) => setTimeout(resolve, 1000, "three"));

const promiseArr = [p1, p2, p3];

Promise.all(promiseArr).then((arr) => console.log(arr));

//4. we have the race method it will get that who came fast like in p3 is fast more p1 and p2

Promise.race(promiseArr).then((arr) => console.log(arr));

//ha ha its so easy piiiisy
