# 📐 Shape Metrics

This Node.js program reads data about 2D shapes from a text file, calculates their perimeter and area, and prints the result in a consistent format.

## ✅ Features

- Supports common 2D shapes:
  - `Square`
  - `Rectangle`
  - `Circle`
  - `Triangle`
- Calculates perimeter and area for each shape
- Reads input line by line from a file
- Prints results to standard output
- Gracefully handles malformed input
- Includes simple test suite
- Designed for easy extensibility

## 📥 Sample Input

Square TopRight 1 1 Side 1
Rectangle TopRight 2 2 BottomLeft 1 1
Circle Center 1 1 Radius 2
Triangle Point1 0 0 Point2 4 0 Point3 0 3

## 📤 Sample Output

Square Perimeter 4.00 Area 1.00
Rectangle Perimeter 4.00 Area 1.00
Circle Perimeter 12.57 Area 12.57
Triangle Perimeter 12.00 Area 6.00

## 🚀 How to Run

1. Install [Node.js]
2. Place input data in a file named `input.txt`
3. Run the program: node index.js

## 🧪 How to Run Tests
This project includes basic unit tests to verify correctness of the shape calculations: node test.js
You should see:
✅ All tests passed!

## 📁 Project Structure
index.js         # Main program: reads input, processes shapes
parser.js        # Parses each line into a shape object
test.js          # Basic test suite
input.txt        # Sample input data
shapes/
    ├── circle.js       # Circle implementation
    ├── rectangle.js    # Rectangle implementation
    ├── shape.js        # Abstract base class
    ├── square.js       # Square implementation
    └── triangle.js     # Triangle implementation

## 🛠️ Adding New Shapes
To add support for a new shape:
- Create a class in the shapes/ folder that extends Shape
- Implement the getPerimeter() and getArea() methods
- Add a case in parseLine() inside parser.js to parse the input line for the new shape

## 📦 Requirements
- Node.js 14 or higher
- No external dependencies

## 👤 Author
This project was developed by Hanna Tkachenko as part of a coding assignment.
It’s designed to demonstrate good structure, testability, and extensibility in a small Node.js project.