//Object Oriented Programming is a programming paradigm based on the 
//concept of 'object' which can contain data, in the form of fields(often known as attributes),
//and property and code in the form of procedures (often known as methods). [Source - wikipedia]

//don't understand no problem go to this like:https://www.youtube.com/watch?v=JO646angDRk&list=PL_XxuZqN0xVCqNHQtxzS9LbeNRMG4AJmG

//easy

//programming paradigm means a standard style to write code 
//when we making a website we have to write many code we have to make many function for 

//one component its hard to manage the code thats why oop has come 

//oop raped every variable,function, loop for the one component so that we can 
//easily find or manage all code for one component 


//think like object

// everything which takes multiple properties to describe is an object

//Object properties or method

//noun or adjective which describe features of an object and which we store in variable its called properties  
//which work can do an object / in object that work related to verb its called method 
//method basically a function

//example

var rect = {
    width: 10,    //--------->
                             //   |properties|
    height:20,    //--------->    


    calculateArea:function(){                  //--------->
        return this.width * this.height
    },                                                      //  |method/function|
                                                            //  |method/function|
    calculateRange:function(){                  //--------->
        return2 * (this.width + this.height)
    }
}
 
var area = rect.calculateArea()
var range = rect.calculateRange()
