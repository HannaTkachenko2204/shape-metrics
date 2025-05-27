import Shape from "./shape.js";

export default class Rectangle extends Shape {
  // прямоугольник создаётся по двум точкам: TopRight x1 y1 и BottomLeft x2 y2
  constructor(x1, y1, x2, y2) {
    super();
    this.width = Math.abs(x1 - x2);
    this.height = Math.abs(y1 - y2);
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  getArea() {
    return this.width * this.height;
  }
}
