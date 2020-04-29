//old system to define a class

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }

// Rectangle.prototype.draw = function () {
//     console.log(this);
//     console.log("Drawing");
// };
// let rect = new Rectangle(12, 34);

// console.log(rect);

//latest es6*****************

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log("Drawing");
    }
}

let rect = new Rectangle(12, 45);

console.log(rect);

//class property
