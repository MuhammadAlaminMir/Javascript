var a = 22
var b = 20



//a > b = true / false

if (a > b) {
    console.log('A is bigger')
} 
else if (a < b) {
    console.log('B is bigger')
} 
else {
    console.log('they both are same')
}


var n = 1 ;

if (n === 0){
    console.log(n, 'is 0')
}

else if (n % 3 === 0 ) {
    console.log(n, 'is even number')
}
else{
    console.log(n,'is odd number')
}

var date = new Date();

//day tracer 
//0 - sunday , 1- monday, 2- tuesday 

var today = date.getDay();

if(today === 0 ){
    console.log("today is sunday")
}
else if(today === 1 ){
    console.log("today is Monday")
}
else if(today === 2 ){
    console.log("today is Tuesday")
}else if(today === 3 ){
    console.log("today is Wednesday")
}else if(today === 4 ){
    console.log("today is Thursday")
}else if(today === 5 ){
    console.log("today is friday")
}
else{
    console.log("today is Saturday")
}