//when we can access a method directly  we didn't need new keyword that call static method

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print() {
        console.log(this.name, this.email);
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
