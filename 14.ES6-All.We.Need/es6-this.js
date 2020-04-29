//this keyword

// its this keyword is related to class

//"use strict"; //for stop referring window object

// function Shape() {
//     this.draw = function () {
//         console.log(this);
//     };
// }

// let s1 = new Shape();

// s1.draw();

// let anotherDraw = s1.draw;

// anotherDraw();

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print() {
        console.log(this.name, this.email);
    }
    test() {
        console.log(this);
    }

    static create(str) {
        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }
}
let str = '{"name": "Hm Nayem", "email" : "amerbal@gmail.com" }';

let p1 = Person.create(str);

console.log(p1);
console.log(p1 instanceof Person);
console.log(p1.print);

let test = p1.test;

test();
