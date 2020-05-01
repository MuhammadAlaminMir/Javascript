//Generator Function

//generator is function which we give anything it gives us an iterator
//Generator is a system that can make any object iterable and also can return  iterator from anywhere

let arr = [1, 2, 3, 4];

// for make a generator we have to declare a function then give a * then name it then as like function
//into the function body at fast we have to give (yield) its means pause then give 1 the yield 2 and then yield 3 its means
//when we call the function it give us fast result then when we call it next time its gives us second result
//

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let it = generator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//we can provide an object to it and run any kind of condition like:

function* generate(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i];
    }
}
let it2 = generator([arr]);

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
