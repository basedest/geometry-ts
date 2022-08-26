// Testing internal library features using classes RegularPolygon and and Point.

import { Point } from '../index';
import RegularPolygon from '../lib/RegularPolygon';

test('Making Hexagon class and testing inherited methods', () => {
	class Hexagon extends RegularPolygon {
		constructor(center: Point, radius: number) {
			super(center, radius, 6);
		}

		toString(): string {
			return `Hexagon with center ${this.center.toString()} and radius ${this.radius}`;
		}
	}

	const hexagon = new Hexagon(new Point(0, 0), 10);
	const expectedLog = 'Hexagon with center (0, 0) and radius 10 with area 300 and perimeter 60';
	const actualLog = `${hexagon.toString()} with area ${hexagon.getArea()} and perimeter ${hexagon.getPerimeter()}`;
	
	expect(actualLog).toBe(expectedLog);
});