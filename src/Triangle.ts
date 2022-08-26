import Point from './lib/Point';
import Polygon from './lib/Polygon';

export default class Triangle extends Polygon {
	
	constructor(a: Point, b: Point, c: Point) {
		super([a, b, c]);
	}
	
	toString(): string {
		return `Triangle with vertices ${this.vertices.map(p => p.toString()).join(', ')}`;
	}
}