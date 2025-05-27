import Shape from "./shape.js";

// новый класс Square (квадрат), который наследует всё от класса Shape
export default class Square extends Shape {
  // constructor — это метод, который вызывается при создании нового объекта класса Square
  constructor(side) {
    super(); // вызов конструктора родительского класса Shape
    this.side = side; // сохраняем длину стороны в свойстве объекта
  }

  getPerimeter() {
    return 4 * this.side;
  }

  getArea() {
    return this.side * this.side;
  }
}
