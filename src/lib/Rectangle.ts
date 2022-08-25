import Point from './Point';
import Polygon from './Polygon';

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
		return this.points[2].x - this.points[0].x;
	}
	getHeight(): number {
		return this.points[2].y - this.points[0].y;
	}
	getArea(): number {
		return this.getWidth() * this.getHeight();
	}
	getPerimeter(): number {
		return (this.getWidth() + this.getHeight()) * 2;
	}

	toString(): string {
		return `Rectangle with top left ${this.points[0].toString()} and bottom right ${this.points[2].toString()}`;
	}
}
