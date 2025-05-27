import fs from 'fs';
import readline from 'readline';
import { parseLine } from './parser.js';

async function processFile(filename) {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (!line.trim()) continue; // пропускаем пустые строки
    try {
      const shape = parseLine(line);
      const perimeter = shape.getPerimeter();
      const area = shape.getArea();

      // Округлим до 2 знаков после запятой для красоты
      console.log(
        `${line.split(' ')[0]} Perimeter ${perimeter.toFixed(2)} Area ${area.toFixed(2)}`
      );
    } catch (e) {
      console.error(`Ошибка при обработке строки: "${line}" - ${e.message}`);
    }
  }
}

const inputFile = './input.txt';

processFile(inputFile);
