// Map in javascript

var arr = [1, 2, 3, 4, 5]

//using map function (easy)

//making a new sqr array 

var sqrArr = arr.map(function (value){
    //return Math.random() * 100
    return value * value
})

// console.log(arr)
// console.log(sqrArr)

//exploring map functionality

// function myMap (arr, ) {
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         var tamp = arr[i] * arr[i]
//         newArr.push(tamp)
//     }
//     return newArr
// }

// console.log(myMap(arr));
var grr = [1, 2, 3, 4, 5]

function myMap (arr, cd ) {
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        var temp = cd (arr[i], i, arr) 
        newArr.push(temp)
    }
    return newArr
}

// console.log(myMap(arr))
//making an array cube by the help of callBack function 



var cube = myMap(grr, function (value){
    return value * value * value
})

var mulTen = myMap(arr, function (value){
    return value *10
})

console.log(cube)
console.log(mulTen)

