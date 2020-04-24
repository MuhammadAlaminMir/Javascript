//Execution context

//context means container like a function its have its own area or container



//In here context meaning js compiling process of a container

/**every js engine start compiling js code form the top then it fast focus on global 
context then one by one it compiling every var, func , loop etc
*/
//when function called that time compiler fast finish the work of the function then 
//it pass throw button 
//like:




function a (){
    b()
    console.log('I an a function a')
}
function b (){
    c()
    console.log('I an a function b')
}
function c (){
    d()
    console.log('I an a function c')
}
function d (){
    e()
    console.log('I an a function d')
}

var x = 100
a()
console.log('I am global function')

// when a executional context start then it create 2 phase
//1. Creation phase
//2.Executional phase
 
//1.creation phase fast work and he look throw every var and function 
//this phase took var name and set its value null/undefined and also took
//the function in or ref then its is finished 

//then the executional phase will start its know every var, function location or name or id
//creation phase do that for him then he go throw every line form the top
//execute every output
//  


 
