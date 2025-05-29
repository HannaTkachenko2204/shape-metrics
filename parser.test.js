import { parseLine } from "./parser";
import Square from "./shapes/square";

test ('test-sqwere', () => {
    const sqwere = parseLine('Square TopRight 1 1 Side 1');
    expect(sqwere).toBeInstanceOf(Square);
})