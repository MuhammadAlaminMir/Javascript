// multi dimensional array

var arr = [
    [80, 50, 90, 78],
    [82, 78, 80, 68],
    [85, 60, 70, 88]
]
//console.log(arr)

// console.log(arr[0][0])
// console.log(arr[0][1])

for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
        console.log('Element', i , ':', j, ':', arr[i][j])
    }
}