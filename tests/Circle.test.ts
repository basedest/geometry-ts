// Testing public library features using classes Circle and and Point.

import * as gl from '../src/index';
test('Making Circle class and testing featured methods', () => {
	const circle = new gl.Circle(new gl.Point(0, 0), 10);
	circle.move(-100, 200);
	circle.scale(2);
	const expectedLog = 'Circle with center (-100, 200) and radius 20 with area 1257 and circumference 126';
	const actualLog = `${circle.toString()} with area ${Math.round(circle.area)} and circumference ${Math.round(circle.circumference)}`;
	expect(actualLog).toBe(expectedLog);
});