//Logical Errors
//Error handling  with if else condition
//when js engine didn't give us an error that time we have to set an if-else error condition

//normal input

let n = Number.parseFloat("45.345");

console.log(n);

//expert user can give us different type data like
let n1 = Number.parseFloat("alamin");

//if-else error handling

function changeToIt(v) {
    let result = Number.parseInt(v);
    if (!result) {
        return "Please Provide a value which is able to convert in Integer";
    }
    return result;
}

let result = changeToIt("amer soner bangla"); // expected value a number(4455 or any kind of number)

console.log(result);
