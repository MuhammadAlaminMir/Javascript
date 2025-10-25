//all about Object Oriented Programming


//object literal

//only when we declare a function into a object that time the function called method
//object literal is not useful everyWhere

//for make oop visible we use live server and chrome

var rect = {
    width:100,
    height: 50,

    draw: function(){
        console.log('I am a rectangle')
        console.log('My width is:',this.width)
        console.log('My height is:',this.height)
    }

}

// rect.draw()

// rect.height = 100;

// rect.draw()

                    //***** This keyword in OOP *******/

        // when this use into a object that time this refer that object only
        //if this keyword use outside a object its refer window object 

        //this is a executional context ... 
        //thats way value of this can be change


          /*** Class in OOP  ****/
            //we can declare oop class in two ways
                                        //1.factory pattern
                                        //2.constructor pattern


                    /**   factory partan template***** 
                     * 
                    factory pattern is a function that can create an object 

                    for make a factory pattern template we have create a oop object and and rape into a 
                    function expression and give it arguments so that we can set this arguments value from outside
                    of the function in that time we have return the oop object like :   */

                    var createRect = function(width, height){
                        return {
                            width: width,
                            height: height,
                        
                            draw: function(){
                                console.log('I am a rectangle')
                                this.printProperties()
                                console.log(this)
                            },

                            printProperties:function(){
                                console.log('My width is:',this.width)
                                console.log('My height is:',this.height)
                            }
                        
                        }
                    }

                    //now we can create unlimited rectangle from this createRect function like:
                    // var rect1 = createRect(30, 25)
                    // rect1.draw()

                    // var rect2 = createRect(50, 70)
                    // rect2.draw()

                    //ha ha its very funny


        //Constructor pattern template*****

        //constructor pattern clear then factory pattern 
    // when we work with constructor pattern we have to declare its fast letter in uppercase or capital letter
        //when we creating a constructor temp it work like a normal function in hare we have defined
        //value after = sign colone(:) its works hare
        //in constructor temp we have to declare this key in front of every properties and method
        //in cons temp when we store that function we have use new key  


        var Rectangle = function (width, height){
            this.width = width
            this.height = height

            this.draw = function(width, height){
                console.log('I am a rectangle')
                this.printProperties()
                console.log(this)
            }

            this.printProperties = function(){
                console.log('My width is:',this.width)
                console.log('My height is:',this.height)
            }
        }

    var rect3 = new Rectangle(45, 56)
    // rect3.draw()


//now we can use it for making many rect 


                            //***********New Keyword-------->

            //when we call new keyword that its done 3 or 4 work 
            //fast it create an empty object then
            //it binned the constructor class/pattern into the empty object that why this key work properly
            //and at last its copy the prototype of an object and Inherit it to the constructor function to make a connection  

        //creating our own new function

    function myNew (constructor){
        var obj = {}
        Object.setPrototypeOf(obj, constructor.prototype)
        var argsArray =Array.prototype.slice.apply(arguments)
        constructor.apply(obj, argsArray.slice(1))
    }


    // *********Constructor Property in Any Object ---->
        
    //Every object has a property constructor
        //lts a property its not the constructor pattern/function
    //every object have a property called constructor 
    //when we declare a object its have a ref thats the constructor -- example:
        //without new keyword constructor doesn't work

    //   console.log(rect3.constructor)
    //   console.log(rect.constructor)



        //in js without primitive everything is object
            //proving the function is an object

            function test (){
                console.log('something')
            }

            test.constructor()
            //only object have constructor 
            //ha ha lol functions have constructor
            
            //another example /function is object 

            var Rect = new Function ('width', 'height', `
            this.width = width
            this.height = height

            this.draw = function(width, height){
                console.log('I am a rectangle')
                this.printProperties()
                console.log(this)
            }

            this.printProperties = function(){
                console.log('My width is:',this.width)
                console.log('My height is:',this.height)
            }`
        )

        var rect5 = new Rect(50, 23)
        console.log(rect5)

                                //3 special method ****
                                    //1. apply
                                    //2.bind 
                                    //3.call 

        //we can call a function with those method

                    //3.call & apply method ******** 
                //those method use for declare an object from out side

            //when we called a function with call/apply method and it an {empty } object
            //that time then function bind in that empty object
            //

            function myFunc (){
                console.log(this)
                console.log(this.a + this.b)

            }

            myFunc.call({a:12, b:43})

            //when we use call method with a function that time if we use this keyword
            //and give the function a {empty object} and call it this keyword to don't call window function
            //and work instantly //apply also do the same

            //we can use the some function for multiple object
            //when a function share different object that we have work with those three method

        //------------->bind method*********

            //bind method only bind an object in function not call 
            //and it give us a function and we have to store it in a variable
            //and if we need to call the function  then we have to call the variable name()
            
        //***In js we have two type data 1. primitive 2.object this two have some different  */
        //that a primitive data is a primitive data js give us that by default like (string,number,null)
        //and multiply primitive make an object 


                            //Pass by value vs pass by reference*********
                            //call by value vs call by reference***********
                

        //in any function if we give as argument a primitive data like(number,string,nan,)then function body can't change its value
        //because when we give a primitive data as argument in a function its make a clone of the primitive data and work with that
        //thats why real primitive not change 
        //and its called pass by value and when we call it that time its called call by value

        //but when we give an object as argument in a function that time its make a ref of the object thats why
        //when we change value of the object in function its change the all object value with the help of the reference
        //and its call pass by reference and when we call it that time its called call by ref

        //thats why a concept come thats in js a object in a mutable obj because its can be change in anywhere


            //oop abstraction is a hidden system 
            //some we have hidden some data to user thats why we have use abstraction or privatization

        //abstraction implementation

     //in hare our goal is that we have to hide some data and whit out in this know one can use the hidden data
     
     //if we need to hide some data in an object we need the help of local variable
     //so that out hidden object don't need this key any more 
     //we can use bind method in hare
     //now we can use position and printProperties only into the object 


        var Rectangle = function (width, height){

            this.width = width
            this.height = height
            var position = {
                x: 56,
                y: -100
            }

            

            var printProperties = function(){
                console.log('My width is:',width)
                console.log('My height is:',height)
            }//.bind

            this.draw = function(width, height){
                console.log('I am a rectangle')
                printProperties()
                console.log('Position X =',position.x, 'Y =',position.y)
            }
        }

       

    // var rect6  = new Rectangle(45, 60)
    // rect6.draw()

            //getter and setter 

            //some time our private need to be accessible from outside that time we need to use get and set
            //method to do it like:
        
            var Rectangle = function (width, height){

                this.width = width
                this.height = height
                var position = {
                    x: 56,
                    y: -100
                }
    
                
    
                var printProperties = function(){
                    console.log('My width is:',width)
                    console.log('My height is:',height)
                }
            //simple way // we have call from the outside getPosition
                this.getPosition = function (){
                    return position
                }
                
                //another way //this system we can set and get the private/abstracted property
                Object.defineProperty(this, 'position',{
                    get: function(){
                        return position
                    },
                    set: function (value){
                        position = value
                    }

                })

                this.draw = function(width, height){
                    console.log('I am a rectangle')
                    printProperties()
                    console.log('Position X =',position.x, 'Y =',position.y)
                }
            }

            var rect7 = new Rectangle(23, 45)
            rect7.Position={
                x : 234,
                y : 245

            }
            console.log(rect7.Position)





                    

                