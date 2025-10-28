//remove a property in object

var point = {
    x: 10,
    y: 20, 
    z: 30
}
point.a = undefined

delete point.a
console.log(point)

