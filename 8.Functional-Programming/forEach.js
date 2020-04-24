//forEach is a javascript array traverse method when we call it and give it a array

//we can access value, index, and the main array 

//we can also get sum in this function

var arr = [1, 2, 3, 4, 5]


//when we call forEach always we have give it an array and we can access of the array by
//declaring a function like:

//javascript sort cut way to traverse an array

// var sum = 0

// arr.forEach(function (value, index, arr){
//     console.log(value, index, arr)
//     console.log(sum += value)
// })

//own way / complicated way to traverse an array

function forEach(arr, cb){
    for(var i = 0; i < arr.length ; i++){
        cb (arr[i], i, arr)
    }
}

var sum = 0 
forEach(arr, function (value, index, arr){
    console.log(value, index, arr)
    sum += value 
})

console.log(sum)


