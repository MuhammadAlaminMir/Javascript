/**logical operator only used when we have Two or more conditions and 
 * result comes from both of their participation
 * (its means result comes to their combination )
 */

// and operator = &&
//or operator = ||
// not operator = ! 


// A && B (And operation)
//true && true = true 
//true && false = false
//true && false = false 
//false && false = false

// A && B (Or operation)
//true && true = true 
//true && false = true
//true && false = true 
//false && false = false

var a = 30
var b = 20
var c = 50 
var d = 60

//and operation &&
if ( a < b && c < d){
    console.log('A is greater then B and C is greater then D')
} else{
    console.log('One condition is false or Both condition is false')
}
//or operation ||
if ( a < b || c > d){
    console.log('A is greater then B or C is greater then D')
} else{
    console.log('Both condition is false')
}
//not equal !
var check = !!!(a > b);
console.log(check);
