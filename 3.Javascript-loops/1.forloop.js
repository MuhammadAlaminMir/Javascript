//for loops

for (var i = 0; i < 1000; i++) {
  //console.log((i + 1),'alamin')
}
// at first write for then give it a open bracket
// then give it a initializer ; 
// give it a variable with var  and assign it a value

//then git it a condition and close it ;

// then increment the value of i then give it a second brackets
//then give it a log or value

// for (initializer ; condition ; increment) {

//}

for (var i = 1; i < 10; i++) {
  if (i % 2 === 1) {
    //console.log(i)
  }
}
for (var i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    //console.log(i)
  }
}
var sum = 0;
for (var i = 0; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(sum + " +" + i + " = " + (sum + i));

    sum += i;
  }
}
console.log("result =", sum);

var sum = 0;
for (var i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(sum + " +" + i + " = " + (sum + i));

    sum += i;
  }
}
console.log("result =", sum);
