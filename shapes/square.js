import Shape from "./shape.js";

export default class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getPerimeter() {
    return 4 * this.side;
  }

  getArea() {
    return this.side * this.side;
  }
}
