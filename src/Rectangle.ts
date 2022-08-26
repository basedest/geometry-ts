import Point from './lib/Point';
import Polygon from './lib/Polygon';

export default class Rectangle extends Polygon {
	
	constructor(topLeft: Point, bottomRight: Point) {
		super([
			topLeft,
			new Point(bottomRight.x, topLeft.y),
			bottomRight,
			new Point(topLeft.x, bottomRight.y)
		]);
	}

	getWidth(): number {
		return this.vertices[2].x - this.vertices[0].x;
	}
	getHeight(): number {
		return this.vertices[2].y - this.vertices[0].y;
	}
	getArea(): number {
		return this.getWidth() * this.getHeight();
	}
	getPerimeter(): number {
		return (this.getWidth() + this.getHeight()) * 2;
	}

	toString(): string {
		return `Rectangle with top left ${this.vertices[0].toString()} and bottom right ${this.vertices[2].toString()}`;
	}
}
