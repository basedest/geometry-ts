import Point from './Point';
import Polygon from './lib/Polygon';

/**
 * Class that represents a Rectangle in 2D space.
 * 
 * @public
 */
export default class Rectangle extends Polygon {
	
	/**
	 * Object constructor.
	 * 
	 * @param topLeft - coordinates of top left corner of the rectangle.
	 * @param bottomRight - coordinates of bottom right corner of the rectangle.
	 */
	constructor(topLeft: Point, bottomRight: Point) {
		super([
			topLeft,
			new Point(bottomRight.x, topLeft.y),
			bottomRight,
			new Point(topLeft.x, bottomRight.y)
		]);
	}

	/**
	 * Width getter.
	 * 
	 * @returns number - width of the rectangle.
	 */
	get width(): number {
		return this.vertices[2].x - this.vertices[0].x;
	}

	/**
	 * Height getter.
	 * 
	 * @returns number - height of the rectangle.
	 * 
	 */
	get height(): number {
		return this.vertices[2].y - this.vertices[0].y;
	}

	/**
	 * Area getter.
	 * 
	 * @returns number - area of the rectangle.
	 */
	get area(): number {
		return this.width * this.height;
	}

	/**
	 * Perimeter getter.
	 * 
	 * @returns number - perimeter of the rectangle.
	 */
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
