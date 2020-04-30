//For Asynchronous system Sometimes we have got some problem

//like Sometime we have called function and store it in a variable and when we console.log that variable
//it gives us output undefined

//its happened Because of asynchronous system
//Because when we storing  a data in database it will take time but when we called the function it will execute instantly
//thats why before storing the data our browser called the function and because of thats we got undefined like

// function sayMyName(name) {
//     let result;
//     setTimeout(() => {
//         result = name;
//         console.log("i have done");
//     }, 3000);
//     return result;
// }

// let output = sayMyName("alamin");

// console.log(output);

//In hare we got the Asynchronous problem
// hare we declare a variable result and set (undefined) or nothing to its value
//and then we declare asynchronous function (setTimeOut) that why out function called instantly and set result value undefined
//and store it into output and console.log
//then after 3 second setTimeOut function set the result value name
//in hare our browser work fast thats why we got undefined

//to solved this problem we have give the output into the setTimeOut then it will gives us correct result like

function sayMyName(name) {
    setTimeout(() => {
        console.log(name);
    }, 3000);
}

let output = sayMyName("alamin");
console.log(output);
