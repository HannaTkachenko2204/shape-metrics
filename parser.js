import Square from './shapes/square.js';
import Rectangle from './shapes/rectangle.js';
import Circle from './shapes/circle.js';
import Triangle from './shapes/triangle.js';

function getParts(line) {
  const parts = line.trim().split(/\s+/);
  return parts;
}

// функция parseLine(line) по строке создаёт нужный объект
export function parseLine(line) { // line — строка из файла input.txt
  const parts = line.trim().split(/\s+/); // удаляем пробелы по краям и разбиваем строку по пробелам в массив parts
  const shapeType = parts[0]; // первый элемент (parts[0]) — это тип фигуры: 'Square', 'Rectangle', 'Circle', 'Triangle'

  switch (shapeType) { // разбор по типу фигуры:
    case 'Square': return parserSquare(line)

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

    case 'Circle': return parserCircle(line)

    case 'Triangle': {
      const coords = parts
        .filter((_, i) => i >= 2) // пропускаем первые два слова (Triangle Point1)
        .map(Number) // преобразуем элементы в числа
        .filter(n => !isNaN(n)); // отфильтровываем нечисловые элементы
      if (coords.length !== 6) throw new Error("Triangle requires 3 points"); // проверяем, что чисел ровно 6 (по 2 координаты на 3 точки)
      return new Triangle(...coords);
    }

    default:
      throw new Error(`Unknown shape type: ${shapeType}`); // если строка начинается с неизвестного слова
  }
}

export function parserSquare(line) {
  const parts = getParts(line);

  const sideIndex = parts.indexOf('Side');
      if (sideIndex === -1) throw new Error('Square missing Side parameter');
      const side = Number(parts[sideIndex + 1]);
      return new Square(side);
}

export function parserCircle(line) {
  const parts = getParts(line);

  const centerIndex = parts.indexOf('Center');
      const radiusIndex = parts.indexOf('Radius');
      if (centerIndex === -1 || radiusIndex === -1)
      throw new Error('Circle missing Center or Radius parameter');

      const x = Number(parts[centerIndex + 1]);
      const y = Number(parts[centerIndex + 2]);
      const radius = Number(parts[radiusIndex + 1]);

      return new Circle(x, y, radius);
}