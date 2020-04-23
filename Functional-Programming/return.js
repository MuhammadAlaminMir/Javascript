//higher order function part-2 /return
//how return a function to another function 
//in here a function making a function

function greet (msg){
    function greetings(name){
         return msg + ' : '+ name + '!'
    }
    return greetings
}

var gm = greet('good Morning')
var gn = greet('Good Night')
var hi = greet('Hello')

var msg = gm('alamin')
var msg1 = gn('alamin')
var msg2 = hi('alamin')
console.log(msg)
console.log(msg1)
console.log(msg2)


function base (b){
    
    return function (n){
        var result = 1
        for (var i = 0; i < b; i++){
            result *= n
        }
        return result
    }
}

var base10 = base(10)

console.log(base10(2))