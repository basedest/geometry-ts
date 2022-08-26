# Geometry-TS

A collection of TS classes for geometric objects and calculations.
Uses 2D coordinates to represent position of objects.

## Public classes

Library provides 3 classes for the most common geometric figures 
and a class to represent point in 2D space.

### *Point*

Utility class to represent point in 2D space.
Primarely used in geometric object constructors.

### *Circle*

Represents circle in 2D space.
Has 2 main parameters: center and radius and 3 calculated parameters: area, circumference and diameter.

### *Rectangle*

Represents rectangle in 2D space.
Has 2 main parameters: top-left and bottom-right corners and 4 calculated parameters: height, width, perimeter and area.

### *Triangle*

Represents triangle in 2D space.    
**Public properties:**
- edges - array of 3 points that represent triangle edges
- perimeter - perimeter of the triangle. *(calculated property)* 
- area - area of the triangle. *(calculated property)*

## Setup

You can grab it directly from npm:

```bash
npm install geometry-ts
# or
yarn add geometry-ts
```

Then you can import it in your project:

In ES modules syntax:
```typescript
import { Circle, Point, Rectangle, Triangle } from 'geometry-ts';
```
In CommonJS syntax:
```javascript
const { Circle, Point, Rectangle, Triangle } = require('geometry-ts');
```

## Usage

You can expand class structure by defining your own classes using inheritance.

```typescript
import { Rectangle, Point } from 'geometry-ts';

class Square extends Rectangle {
		sideLenght: number;
		constructor(topLeft: Point, sideLenght: number) {
			super(topLeft, new Point(topLeft.x + sideLenght, topLeft.y + sideLenght));
			this.sideLenght = sideLenght;
		}
		toString(): string {
			return `Square with top left corner ${this.vertices[0].toString()} and side ${this.sideLenght}`;
		}
	}

	const square = new Square(new Point(0, 0), 10);
    console.log(square.toString()); // Square with top left corner (0,0) and side 10
    console.log(square.area); // 100
```