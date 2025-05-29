import { parseLine } from "./parser";
import Square from "./shapes/square";
import Shape from "./shapes/shape";
import Circle from "./shapes/circle";

test ('test-sqwere', () => {
    const sqwere = parseLine('Square TopRight 1 1 Side 1');
    expect(sqwere).toBeInstanceOf(Square);
    expect(sqwere).toBeInstanceOf(Shape);
    expect(sqwere.side).toBe(1);
})

test ('test-circle', () => {
    const circle = parseLine('Circle Center 1 1 Radius 2');
    expect(circle).toBeInstanceOf(Circle);
    expect(circle).toBeInstanceOf(Shape);
    expect(circle.radius).toBe(2);
})



