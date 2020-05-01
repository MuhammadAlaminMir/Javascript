// In this section we will learn Asynchronous Programming in js

//Before understanding Asynchronous we have to understand what is synchronous

//Synchronous*****

//Synchronous basically means that you can only execute one thing at a time
//its system is very net and clean because as we all know that js engine execute one by one line of code at the same time
// and IN the synchronous system when engine executing data and one data is taking time that time the engine stop
//and wait for the data and when it can execute the line then it jump into the next line or else it stop and wait like:

var a = 10;
var b = 14;

var result = a + b;

// console.log(result)

// var response = storeResult (result)

if (response.success) {
    console.log("Successfully Stored");
} else {
    console.log("Data Store Failed");
}

//this time in the no 5 line we watching tha result going to backend and storing the data into database and it will take time
//in synchronous system the engine will stop in that line after the data store the engine will move into the next code
//synchronous is a lendi process but  its polite

//Asynchronous****

//Asynchronous means whose work done fast it can go fast

//Asynchronous is the opposite of the synchronous system like in upper code when engine storing the data into database
//it will take time and synchronous system will wait at the time but Asynchronous not wait it can do multi task at the same time
//Asynchronous take one part to storing the data and one part will go forward and execute to next line of code
