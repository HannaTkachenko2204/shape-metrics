// базовый абстрактный класс(шаблон), который требует реализовать методы getPerimeter() и getArea()
// все фигуры будут от него наследоваться

export default class Shape {
    getPerimeter() {
      throw new Error("getPerimeter() not implemented"); // объявлен, но не реализован
    }
  
    getArea() {
      throw new Error("getArea() not implemented");
    }
  }