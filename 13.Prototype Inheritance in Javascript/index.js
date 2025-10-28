//Prototypical INheritance 13

function Shape (){

}

Shape.prototype.common =  function () {
        console.log('I am Common method')
    }



function Square(width){
    this.width = width
}

//Creating own prototype
Square.prototype = Object.create(Shape.prototype)
//for reset constructor
Square.prototype.constructor = Square

Square.prototype.draw = function (){
        console.log('Drawing')
    }


var shape = new Shape()
var square = new Square(23)

//calling the super
 
//Composition Mixing

var canWalk = {
    walk: function(){
        console.log('Walking')
    }
}
var canEat = {
    eat: function (){
        console.log('Eating')
    }
}

var canSwim = function (){
    console.log('swimming')
}

// var person = Object.assign({}, canWalk, canEat)
// person.name  = 'alamin'

function mixin (target, ...sources){
    Object.assign(target, ...sources)
}

function Person (name){
    this.name = name
}
mixin(Person.prototype, canWalk, canEat)

var person = new Person('alamin')
console.log(person)

function GoldFish (name){
    this.name = name
}

mixin(GoldFish.prototype, canWalk, canEat)
var fish = new GoldFish('bla bla bla ')
console.log(fish)