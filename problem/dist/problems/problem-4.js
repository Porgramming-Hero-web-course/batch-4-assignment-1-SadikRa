"use strict";
{
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    function calculateShapeArea(param) {
        if (param instanceof Circle) {
            return param.getArea();
        }
        else if (param instanceof Rectangle) {
            return param.getArea();
        }
        else {
            return 0;
        }
    }
    /// take a look
    const circleArea = calculateShapeArea(new Circle(5));
    const rectangleArea = calculateShapeArea(new Rectangle(4, 6));
    //   console.log(circleArea);
    //   console.log(rectangleArea);
    ///
}
