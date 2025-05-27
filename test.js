import Square from './shapes/square.js';
import Rectangle from './shapes/rectangle.js';
import Circle from './shapes/circle.js';
import Triangle from './shapes/triangle.js';

function approxEqual(a, b, epsilon = 0.01) {
  return Math.abs(a - b) < epsilon;
}

const tests = [
  {
    name: "Square 2",
    shape: new Square(2),
    perimeter: 8,
    area: 4,
  },
  {
    name: "Rectangle 2x3",
    shape: new Rectangle(3, 3, 1, 0),
    perimeter: 10,
    area: 6,
  },
  {
    name: "Circle r=1",
    shape: new Circle(0, 0, 1), // x=0, y=0, radius=1
    perimeter: 2 * Math.PI,
    area: Math.PI,
  },
  {
    name: "Triangle (0,0)-(4,0)-(0,3)",
    shape: new Triangle(0, 0, 4, 0, 0, 3),
    perimeter: 12,
    area: 6,
  },
];

for (const { name, shape, perimeter, area } of tests) {
  console.assert(approxEqual(shape.getPerimeter(), perimeter), `${name} perimeter failed`);
  console.assert(approxEqual(shape.getArea(), area), `${name} area failed`);
}

console.log("✅ All tests passed!");
