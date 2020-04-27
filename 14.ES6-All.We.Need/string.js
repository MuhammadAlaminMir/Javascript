//string template

//use backtick (``) for multiline string
//we can set logic into a string to using string temp
//we can use trim() function to remove extra space 

var s = `       my name is alamin 
i am a student 
and also a web dev`

console.log(s)

var age = 27
var name = 'alamin'

console.log('My name is ' + name +' i am', + age + ' years old')  //old system
console.log(`My name is ${name}, i am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult`) //es6 temp

console.log(s.includes('fuck of'))