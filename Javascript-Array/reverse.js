// Reverse an Arry
//[1, 2, 3, 4, 5]

var arr = [1, 2, 3, 4, 5, 6, 7]

for (var i = 0; i < (arr.length / 2); i++){
    var tamp = arr[i]
    arr[i] = arr[arr.length -1 - i]
    arr[arr.length -1 - i] = tamp
}
console.log(arr)//complicate reversing algorithm

console.log(arr.reverse())//simple reversing algorithm



