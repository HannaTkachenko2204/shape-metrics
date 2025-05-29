import { parseLine } from "./parser";
import Square from "./shapes/square";
import Shape from "./shapes/shape";
import Circle from "./shapes/circle";
import Rectangle from "./shapes/rectangle";
import Triangle from "./shapes/triangle";

test ('test-square', () => {
    const square = parseLine('Square TopRight 1 1 Side 1');
    expect(square).toBeInstanceOf(Square);
    expect(square).toBeInstanceOf(Shape);
    expect(square.side).toBe(1);
})

test ('test-circle', () => {
    const circle = parseLine('Circle Center 1 1 Radius 2');
    expect(circle).toBeInstanceOf(Circle);
    expect(circle).toBeInstanceOf(Shape);
    expect(circle.radius).toBe(2);
})

test ('test-rectangle', () => {
    const rectangle = parseLine('Rectangle TopRight 2 2 BottomLeft 1 1');
    expect(rectangle).toBeInstanceOf(Rectangle);
    expect(rectangle).toBeInstanceOf(Shape);
    expect(rectangle.width).toBe(1);
    expect(rectangle.height).toBe(1);
})

test('test-triangle', () => {
    const triangle = parseLine('Triangle Point1 0 0 Point2 4 0 Point3 0 3');
    expect(triangle).toBeInstanceOf(Triangle);
    expect(triangle).toBeInstanceOf(Shape);
    expect(triangle.p1.x).toBe(0);
    expect(triangle.p1.y).toBe(0);
    expect(triangle.p2.x).toBe(4);
    expect(triangle.p2.y).toBe(0);
    expect(triangle.p3.x).toBe(0);
    expect(triangle.p3.y).toBe(3);
});


