//function execution

//when we declare function and call it and  give the compiler(jit) 
//then the execution context come 
//as we know that the execution context have two work 
//1.creation phase 2.execution phase 


//example
 
abc()

function abc (){
    console.log('I an function')
}

abc()
//In hare when the creation phase start and he got a function he skip that and then he got the function abc 
//in hare remind that in variable creation phase took its id and set its value undefined but 
//in function he took the function id and set a ref of the function 
//because of that a function can be called in anywhere because when the execution got that he go to the ref that 
//set by creation phase then execution execute that !!!!!wow