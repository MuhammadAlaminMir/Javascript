//Promise form (es6)
//Promise is es6s constructor function which we use for making a promise object
//for making this constructor we have to give it a callback function as an argument
//and into the callback function have two argument
//And they are also functions
//when our promise successfully done that time it give us (resolve)
//And when our promise got error that time it gives us (reject)
//1.resolve
//2.reject
//

//example
//simple promise
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "hi");
});
//after declaring promise we will got a result it can re done(resolve) or it can give us an error(reject)
//to get the result we have two option then or catch when our result is successful that time we got the then or else
//it go to catch like:

//into then parentheses we have to set the resolve callback function like:
// p1.then((v) => {
//     console.log(v);
// }); //or else we got the error and we catch error with catch like:
// p1.catch((err) => {
//     console.log(e);
// });

//Promise use case / our own Promise functionality

function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve("I have got the I phone");
            } else {
                reject(new Error("You have Failed"));
            }
        }, 2000);
    });
}
getIphone(true)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e.message);
    });

//converting call back to promise

// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("get", url);
//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.response);
//                 callback(null, response);
//             } else {
//                 callback(xhr.status, null);
//             }
//         }
//     };
//     xhr.send();
// }

// getRequest(, (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

const Base_URL = "http://jsonplaceholder.typicode.com/users";

function getRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response);
                    resolve(response);
                } else {
                    reject(new Error("Error Occurred"));
                }
            }
        };
        xhr.send();
    });
}

getRequest(`${Base_URL}/1`)
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });

//ha ha done
