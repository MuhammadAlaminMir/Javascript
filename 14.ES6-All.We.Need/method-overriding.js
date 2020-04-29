class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log("Drawing..");
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log("I am drawing");
    }

    calculate() {
        return this.width * this.height;
    }
}

let r = new Rectangle("green", 4, 5);

console.log(r);
r.draw();
