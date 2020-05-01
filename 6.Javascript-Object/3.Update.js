//Update in a object



var point = {
    x: 10,
    y: 20, 
    z: 30
}

//use dot notation to update object value

point.x = 45

console.log(point.x)

point['y'] = 100

var prop = 'z'
point[prop] = 55

console.log(point)