import Point from './Point';
import Polygon from './Polygon';

export default class Triangle extends Polygon {
    
	constructor(a: Point, b: Point, c: Point) {
		super([a, b, c]);
	}
    
	toString(): string {
		return `Triangle with points ${this.points.map(p => p.toString()).join(', ')}`;
	}
}