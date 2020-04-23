//Higher order function part -1


function add(a, b ){
    return a + b
}

function manipulate (a, b, func){
    var c = a + b
    var d = a - b

    // function multiply() {
    //     var m = func(a, b)
    //     return c*d*m
    // }

    return function () {
        var m = func(a, b)
        return c*d*m
    }
    
}

var multi = manipulate(3, 4, add)
console.log(multi())

 //5.we can pass function as an arguments

 //6. we can return function from another function