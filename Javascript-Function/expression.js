//function expression
//when function declare in a variable its called expression function
//and when we use expression function that time we can skip the parameter
//of the function and when we skip the parameter the function called anonymous function

var addition = function (a, b) { //anonymous function
    return a + b 
}

console.log(addition(10, 20))

//example anonymous function

setTimeout(function (){
    console.log('i will call after 5 sec')
}, 5000)

var another = addition
console.log(another(2, 4))