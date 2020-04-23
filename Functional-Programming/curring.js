//curring function

//simple function
function add(a, b, c){
    return a + b + c
}

//add(42, 23, 45)

//curring version
function curring (a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

var result = curring(5)(10)(15)
console.log(result)