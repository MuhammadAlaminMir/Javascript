//when we declare a function into a function its called nested function like that
//when we declare a loop into a loop that called nested loop
//like that when we declare / create a scope into a scope thats called a nested scope
//like:

var x = 55

function test(){
    var x = 45
    console.log(x)


    function nested (){
        var y = 65
        console.log(y)
        console.log(x)
    }
    nested()
}

//a variable can't be use out of their scope

//lexical scope means define a token to its scope
// every word is a token and every token is called lexical 

//when js code compile that time js engine set every token scope thats call lexical scope


