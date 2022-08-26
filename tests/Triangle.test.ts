// Testing public library features using classes Triangle and and Point.

import * as gl from '../src/index';
test('Making Circle class and testing featured methods', () => {
	const triangle = new gl.Triangle(new gl.Point(0, 0), new gl.Point(0, 10), new gl.Point(10, 0));
	const expectedLog = 'Triangle with vertices (0, 0), (0, 10), (10, 0) with area 50 and perimeter 34';
	const actualLog = `${triangle.toString()} with area ${Math.round(triangle.area)} and perimeter ${Math.round(triangle.perimeter)}`;
	expect(actualLog).toBe(expectedLog);
});