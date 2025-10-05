//for loops

for (var i = 0; i < 1000; i++){
    //console.log((i + 1),'alamin')
}

//at fast we have give a statement like (for, if , else, function)

//in for loop at fast declare for statement
//then give it a initializer (i) into a fast brackets then close it with ;

//then git it a condition and close it ;

// then increment the value of i then give it a second brackets 
//then give it a log or value





// for (initializer ; condition ; increment) {

//}

for (var i = 1 ; i < 100 ; i++){
    if(i % 2 === 1 ){
        //console.log(i)
    }
}
for (var i = 1; i < 100 ; i++){
    if(i % 2 === 0){
        //console.log(i)
    }
}
var sum = 0;
for (var i = 0; i <= 100; i++){
    if (i % 2 === 1){
    console.log(sum + ' +' + i  + ' = ' + (sum + i))

    sum += i  
    }  
}
console.log('result =',sum)

var sum = 0;
for (var i = 0; i <= 100; i++){
    if (i % 2 === 0){
    console.log(sum + ' +' + i  + ' = ' + (sum + i))

    sum += i  
    }  
} 
console.log('result =',sum)