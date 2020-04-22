//Traverse an Array
// traverse means create a loop and catch every element of a array

var arr = [2, 3, 4, 5, 7, 8];

// for (var i = 0 ; i < arr.length; i++){
//     //console.log(arr[i]);
//     arr[i] = arr[i] + 2
    
// }
// console.log(arr);

// var sum = 0

// for (var i = 0 ; i < arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum)

for (var i = 0; i < arr.length ; i++){
    if (arr[i] % 2 === 1 ){
        console.log('odd no', arr[i])
    }
}