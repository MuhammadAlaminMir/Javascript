//compare two object

var obj = {
    a : 20, 
    b : 33
}
var obj2 = {
    a : 20, 
    b : 33
}

if (obj.a === obj2.a && obj.b === obj2.b){
    console.log(true)
}else{
console.log(false)
}

console.log(obj === obj2)
// this will return false because in js two object are equal only when both point to the same reference in memory.

console.log(obj)

console.log(JSON.stringify(obj) === JSON.stringify(obj2))