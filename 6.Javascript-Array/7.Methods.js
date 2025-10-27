//array javascript methods

var arr = [1, 2, 3, 4, 5, 6]
var arr2 = [4, 5, 6, 6, 7,]
console.log(arr) //simple out put
//console.log(arr.join(', ')) / for join something

//console.log(arr.fill(0)) /for fill a array

var arr3  = arr.concat(arr2)//for add two array

//console.log(arr3)

console.log(Array.isArray(arr))//isArray for ensure the current array is relay an array ?

var arr4 = Array.from(arr)//for copy an array
// we can create an array from any iterable object like string ,set ,map etc using Array.from()
let s = "hello"
var arr5 = Array.from(s)
// arr5 will be ['h','e','l','l','o']

console.log(arr4)

