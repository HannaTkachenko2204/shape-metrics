import Shape from "./shape.js";

export default class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
