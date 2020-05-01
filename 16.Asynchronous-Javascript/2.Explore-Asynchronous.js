//Exploring the Asynchronous Programming in Javascript

//Normally when we write simple line of code that time in that code didn't have the asynchronous
//We have to simulate the asynchronous into the code
//we will got the asynchronous when we will work with the (database,file system or rest api etc)

//but we are just work with vanilla js thats why we need some web api
//web api is a tools or many tools that which can easier our daily life and node js provide us that

//we have the setTimeOut is a asynchronous function and its work is delay the code execution
//and using the setTimeOut we can easily understand that js is a asynchronous programming language

console.log("I am line 1 ");
setTimeout(() => {
    console.log("I am line 3 and I have done");
}, 5000);
console.log("I am line 3 ");
console.log("I am line 4 ");
setTimeout(() => {
    console.log("I am line 5 and I have done");
}, 3000);

// Here at fast synchronous system work fast like line (1,3,4)
//then the asynchronous will work because we set the time outline
