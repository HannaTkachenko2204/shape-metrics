import fs from 'fs'; // модуль fs — для работы с файловой системой (чтение файла)
import readline from 'readline'; // readline — для построчного чтения файла
import { parseLine } from './parser.js';

async function processStream(input) {
  const rl = readline.createInterface({ // cоздаём интерфейс readline для построчного чтения из этого потока
    input, // может быть как файл, так и стандартный ввод (stdin)
    crlfDelay: Infinity, // помогает правильно читать строки с разными окончаниями
  });

  for await (const line of rl) { // цикл for await — асинхронно перебираем строки из файла (читаем построчно)
    if (!line.trim()) continue; // пропускаем пустые строки
    try {
      const shape = parseLine(line); // парсим строку, функция parseLine должна вернуть объект фигуры (shape), у которого есть методы getPerimeter() и getArea()
      // вызываем у фигуры методы для вычисления периметра и площади:
      const perimeter = shape.getPerimeter();
      const area = shape.getArea();

      // выводим имя фигуры (берём первый элемент строки) + периметр и площадь, округлённые до 2 знаков после запятой
      console.log(
        `${line.split(' ')[0]} Perimeter ${perimeter.toFixed(2)} Area ${area.toFixed(2)}`
      );
    } catch (e) {
      console.error(`Ошибка при обработке строки: "${line}" - ${e.message}`);
    }
  }
}

// Определяем источник ввода:
// process.argv — это массив, который содержит аргументы командной строки
// Если передан аргумент (например: node index.js input.txt) — читаем из файла
// Иначе читаем из стандартного ввода (stdin)
const filename = process.argv[2];

if (filename) {
  const fileStream = fs.createReadStream(filename); // создаём поток чтения из файла
  processStream(fileStream);
} else {
  processStream(process.stdin); // читаем из стандартного ввода
}


// Программа построчно читает данные из входного потока:
// - Если передан путь к файлу — читает из файла input.txt.
// - Иначе — читает из стандартного ввода (stdin).

// Для каждой непустой строки:
// - парсит её в фигуру (например, квадрат, треугольник),
// - считает периметр и площадь,
// - выводит результаты.
// Если строка содержит ошибку, сообщает об этом.