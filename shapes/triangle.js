import Shape from "./shape.js";

export default class Triangle extends Shape {
  constructor(x1, y1, x2, y2, x3, y3) {
    super();
    this.p1 = { x: x1, y: y1 };
    this.p2 = { x: x2, y: y2 };
    this.p3 = { x: x3, y: y3 };
  }

  distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }

  getPerimeter() {
    return (
      this.distance(this.p1, this.p2) +
      this.distance(this.p2, this.p3) +
      this.distance(this.p3, this.p1)
    );
  }

  getArea() {
    const { x: x1, y: y1 } = this.p1;
    const { x: x2, y: y2 } = this.p2;
    const { x: x3, y: y3 } = this.p3;
    return Math.abs((x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)) / 2);
  }
}
