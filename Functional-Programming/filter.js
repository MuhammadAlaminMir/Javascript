//filter function 
//this function use for filter data 


//filter method (easy)

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// var filterArray = arr.filter(function (value){
//     return value  > 4
    
// })
//  console.log(filterArray)

function myFilter (arr, cb){
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if (cb(arr[i], i, arr)){
             newArr.push(arr[i])
        }
    }
    return newArr
}
//console.log(myFilter(arr))

console.log(myFilter(arr, function(value){
    return value % 2 === 1 
}))