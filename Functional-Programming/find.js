var arr = [2, 43, 5, 6, 67, 3, 2, 1, 5, 8]

// var result = arr.find(function(value , index ){
//     return value === 8
// })
 
// console.log(8)

var result = arr.findIndex(function (value){
    return value === 5
})
console.log(result)

//implementation
function myFind (arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            //return i / for index
            return arr[i] //for value
        }
    }
}

var result2 = myFind (arr, function(value){
    return value === 8
})

console.log(result2)