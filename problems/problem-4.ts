{
  ///Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type ShapeT = Circle | Rectangle;

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  function calculateShapeArea(param: ShapeT) {
    if (param instanceof Circle) {
      return param.getArea();
    } else if (param instanceof Rectangle) {
      return param.getArea();
    } else {
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
