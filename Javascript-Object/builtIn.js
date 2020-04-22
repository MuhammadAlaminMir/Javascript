//Object build in method

var obj = {
    x : 30,
    y : 40,
    z : 50
}

console.log(Object.keys(obj))//for find key in an array
console.log(Object.values(obj))//for value key in an array

console.log(Object.entries(obj))//for multi dimension array


var obj2 =Object.assign({},obj)
obj2.x = 45
console.log(obj2)