import Square from './shapes/square.js';
import Rectangle from './shapes/rectangle.js';
import Circle from './shapes/circle.js';
import Triangle from './shapes/triangle.js';

// функция parseLine(line) по строке создаёт нужный объект
export function parseLine(line) {
  const parts = line.trim().split(/\s+/);
  const shapeType = parts[0];

  switch (shapeType) {
    case 'Square': {
      // Square TopRight 1 1 Side 1
      const sideIndex = parts.indexOf('Side');
      if (sideIndex === -1) throw new Error('Square missing Side parameter');
      const side = Number(parts[sideIndex + 1]);
      return new Square(side);
    }

    case 'Rectangle': {
      // Rectangle TopRight 2 2 BottomLeft 1 1
      const topRightIndex = parts.indexOf('TopRight');
      const bottomLeftIndex = parts.indexOf('BottomLeft');
      if (topRightIndex === -1 || bottomLeftIndex === -1)
        throw new Error('Rectangle missing TopRight or BottomLeft parameter');
      const x1 = Number(parts[topRightIndex + 1]);
      const y1 = Number(parts[topRightIndex + 2]);
      const x2 = Number(parts[bottomLeftIndex + 1]);
      const y2 = Number(parts[bottomLeftIndex + 2]);
      return new Rectangle(x1, y1, x2, y2);
    }

    case 'Circle': {
      // Circle Center 1 1 Radius 2
      const radiusIndex = parts.indexOf('Radius');
      if (radiusIndex === -1) throw new Error('Circle missing Radius parameter');
      const radius = Number(parts[radiusIndex + 1]);
      return new Circle(radius);
    }

    case 'Triangle': {
      const coords = parts
        .filter((_, i) => i >= 2)
        .map(Number)
        .filter(n => !isNaN(n));
      if (coords.length !== 6) throw new Error("Triangle requires 3 points");
      return new Triangle(...coords);
    }

    default:
      throw new Error(`Unknown shape type: ${shapeType}`);
  }
}