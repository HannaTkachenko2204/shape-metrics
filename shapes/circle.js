import Shape from "./shape.js";

export default class Circle extends Shape {
  constructor(x, y, radius) {
    super();
    this.x = x; // центр X
    this.y = y; // центр Y
    this.radius = radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
