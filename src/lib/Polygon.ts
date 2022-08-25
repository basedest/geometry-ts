import Point from './Point';
import IShape from './Shape';

export default class Polygon implements IShape {
	points: Point[];
	constructor(points: Point[]) {
		this.points = points;
	}
	toString(): string {
		return `Polygon with ${this.points.length} points`;
	}
}