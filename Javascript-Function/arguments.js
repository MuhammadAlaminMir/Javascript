//function arguments
//when we use a function we give it a input from outside of the function 
//its call arguments
//when we use function and called its outside and give that data that
//data is a argument like:
//add(2,4)in hare 2,4 in a arguments

//function parameter
//in function we give into parenthesis a variable that variable is a parameter
//we can give a function 
// name of input in called parameter like:

//function add ( a) {} in here a is a parameter


/*******Parameter practice */

// function add (a, b) {
//     var result = a + b
//     return(result)

// }

// // add(10, 20)
// // console.log(add(10, 20))


// var arr1 = [1, 3, 5]
// var arr2 = [1, 2, 4, 8, 5]
// var arr3 = [6, 4, 7]



// function sumOfArray (arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
 
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)


/******Arguments practice */
//arguments an Array like data structure which we can traverse like array
//for arguments we can provide data without parameter

function test(a, b, c){
    //console.log(arguments)
    for (var i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }

}

test(10, 20, 30)

function addAll (){
    var sum = 0
    for (var i = 0; i < arguments.length; i++){
        sum += (arguments[i])
    }
    console.log(sum)
}
addAll(2, 3, 4, 5, 6, 6, 67,7, 3)