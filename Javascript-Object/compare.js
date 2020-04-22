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

console.log(obj)

console.log(JSON.stringify(obj) === JSON.stringify(obj2))