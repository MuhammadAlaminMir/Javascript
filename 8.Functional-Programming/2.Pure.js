 //javascript pure function

 // 1. A pure function returns the same result if given the same arguments
 //2. It does not cause any observable side effects like:

 function sqr (n){
     return n  * n
 }
 

console.log(sqr(5))
console.log(sqr(5))

//Non pure function 
var n = 30

function change (){
    n = 100
}
change()

console.log(n)

//no.2
 var point = {
     x: 45,
     y: 35
 }

 function printPoint (point){
     point.x = 100
     point.y = 200

     console.log(point)
 }

 printPoint(point)

 console.log(point)