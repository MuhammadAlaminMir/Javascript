// Closure

// when we use a global/function scope data  to another function scope
//that time its all closure like:

var b = 10

function a (){
    var x = 5

    return function(){
        console.log(x)
    }
}

var abc = a()

console.dir(abc)

//copy the code and run it in browser 

