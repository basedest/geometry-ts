import Point from './Point';
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

	get width(): number {
		return this.vertices[2].x - this.vertices[0].x;
	}
	get height(): number {
		return this.vertices[2].y - this.vertices[0].y;
	}
	get area(): number {
		return this.width * this.height;
	}
	get perimeter(): number {
		return (this.width + this.height) * 2;
	}

	/**
	 * Object stringifier.
	 * 
	 * @returns string - some information about the rectangle.
	 */
	toString(): string {
		return `Rectangle with top left ${this.vertices[0].toString()} and bottom right ${this.vertices[2].toString()}`;
	}
}
