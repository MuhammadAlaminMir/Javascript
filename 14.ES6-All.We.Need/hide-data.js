//hiding data with symbol
//developer use _ to say that don't use it

//for hiding data symbol is one of the solution
//symbol make an  unique identifier

// const _radius = Symbol();
// const _name = Symbol();
// const _draw = Symbol();

// class Circle {
//     constructor(radius, name) {
//         this[_radius] = radius;
//         this[_name] = name;
//     }

//     [_draw]() {
//         console.log("Drawing..");
//     }
// }

// let c1 = new Circle(2, "alamin");

// console.log(c1);

//we can access symbols hidden value

// console.log(Object.getOwnPropertySymbols(c1));

// let key = Object.getOwnPropertySymbols(c1)[0];
// console.log(c1[key]);

//hide data with Weak map*********************

const _radius = new WeakMap();
const _name = new WeakMap();
const _resize = new WeakMap();

class Circle {
    constructor(radius, name) {
        this.size = 100;
        _radius.set(this, radius);
        _name.set(this, name);

        _resize.set(this, () => {
            console.log(this.size);
        });
    }

    draw() {
        console.log("Drawing..");
        console.log(_radius.get(this), _name.get(this));
        _resize.get(this)();
    }
}

let c1 = new Circle(2, "alamin");

c1.draw();

console.log(c1);
