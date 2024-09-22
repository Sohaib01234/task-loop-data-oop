// This will show a message in the browser's console
console.log('Hello from the JavaScript file!');


class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate an abstract class.");
        }
    }
}

class Rectangle extends Shape {
    static count = 0;

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        Rectangle.count++;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    displayInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
    }

    toString() {
        return `Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }

    static getCount() {
        return Rectangle.count;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

// Example usage:
try {
    const shape = new Shape(); // This will throw an error
} catch (e) {
    console.log(e.message);
}

const rect1 = new Rectangle(4, 5);
rect1.displayInfo();

const square1 = new Square(4);
square1.displayInfo();

console.log(`Number of created objects: ${Rectangle.getCount()}`);
