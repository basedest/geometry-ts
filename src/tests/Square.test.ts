// Testing public library features using classes Rectangle and and Point.

import * as gl from '../index';
test('Making Square class and testing inherited methods', () => {
	class Square extends gl.Rectangle {
		sideLenght: number;
		constructor(topLeft: gl.Point, sideLenght: number) {
			super(topLeft, new gl.Point(topLeft.x + sideLenght, topLeft.y + sideLenght));
			this.sideLenght = sideLenght;
		}
		toString(): string {
			return `Square with top left corner ${this.vertices[0].toString()} and side ${this.sideLenght}`;
		}
	}

	const square = new Square(new gl.Point(0, 0), 10);
	const expectedLog = 'Square with top left corner (0, 0) and side 10 with area 100 and perimeter 40';
	const actualLog = `${square.toString()} with area ${square.getArea()} and perimeter ${square.getPerimeter()}`;

	expect(actualLog).toBe(expectedLog);
});
