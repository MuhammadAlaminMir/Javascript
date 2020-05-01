//IN Old js we have two type of data
//1.Primitive : (NaN, Number, String , Undefined , null, Boolean )
//2.Object : (array, function, object)

//But es6 gives us a new primitive data its name symbols
//js gives us a symbols factory
//Symbol always give us Unique identifier
//we can give a description into the symbol parentheses

//symbol
let s1 = Symbol("its s1");
let s2 = Symbol("its s2");

console.log(s1);
console.log(s2);

//two symbol can't same
console.log(s1 === s2);

//symbol have many method like
//find it

//symbol help us for hide property into a class

//we can touch with the help of symbol like

let toss = {
    Head: Symbol("head"),
    Tail: Symbol("tail"),
};
