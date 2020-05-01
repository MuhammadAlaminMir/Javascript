//function composition 
//when we can provide fast function inputs to second function output then 
//we can say it composition like:
function print (inp){
    console.log(inp)
}
function multiplyByFive (n){
    return n * 5
}
function add(a, b){
    return a + b
}
print(multiplyByFive(add(3,5)))