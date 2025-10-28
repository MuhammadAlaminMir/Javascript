//Object properties or method


//noun or adjective which describe features of an object and which we store in variable its called properties  

//when a function declare in a object its call method 
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
