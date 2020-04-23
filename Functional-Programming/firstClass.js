// First class function

function add (a, b){
    return a+ b
}


// 1. A function ca be stored in a variable
var sum = add
 console.log(sum(4, 5))
 console.log(typeof sum)

 //2. A function can be stored in an array
 var arr =[]
 arr.push(add)
 console.log(arr)
 console.log(arr[0](3, 5))

 //3. A function can be stared in an object
 var obj = {
     sum: add
 }
 console.log(obj)
 console.log(obj.sum(7, 4))

 //4 we can create function as we need 
 setTimeout(function (){
     console.log('I have created ...')
 })




