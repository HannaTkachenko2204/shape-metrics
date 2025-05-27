import fs from 'fs'; // модуль fs — для работы с файловой системой (чтение файла)
import readline from 'readline'; // readline — для построчного чтения файла
import { parseLine } from './parser.js';

async function processFile(filename) {
  const fileStream = fs.createReadStream(filename); // cоздаём поток чтения файла fileStream на основе этого файла

  const rl = readline.createInterface({ // cоздаём интерфейс readline для построчного чтения из этого потока
    input: fileStream,
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

const inputFile = './input.txt'; // путь к входному файлу input.txt

processFile(inputFile); // вызываем асинхронную функцию


// Файл построчно читает текстовый файл input.txt.
// Для каждой непустой строки:
// - парсит её в фигуру (например, квадрат, треугольник),
// - считает периметр и площадь,
// - выводит результаты.
// Если строка содержит ошибку, сообщает об этом.