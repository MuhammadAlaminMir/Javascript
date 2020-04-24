// Closure is when a function is able to remember and access it's lexical scope
//even when that function executing outside it's lexical scope 

//example

function test(){
    var msg = "I am Learning lexical scope and closure"

    function sayMng(){
        console.log(msg)

    }
    sayMng()
}
test()

// closure means a data declare into a function which called outside of his own scope


for (var i = 1; i <= 5; i++){
    (function(n) {
        setTimeout(function (){
        console.log(n)
    }, 1000 * n)
    })(i)
}