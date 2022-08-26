import Point from './lib/Point';
import IShape from './lib/Shape';

export default class Circle implements IShape {
	center: Point;  //coordinates of the center of the circle
	radius: number; //radius of the circle

	/**
	 * Constructor for the circle class.
	 * 
	 * @param center - center of the circle
	 * @param radius - radius of the circle
	 */
	constructor(center: Point, radius: number) {
		this.center = center;
		this.radius = radius;
	}

	/**
	 * Scales the circle by a given scale factor.
	 * 
	 * @param scale - scale factor;
	 * 
	 * @returns void
	 */
	scale(scale: number): void {
		this.radius *= scale;
	}

	/**
	 * Moves the circle by adjusting the center point coordinates.
	 * 
	 * @param x - x-coordinate of the point to move the circle to
	 * @param y - y-coordinate of the point to move the circle to
	 * 
	 * @returns void
	 */
	move(x: number, y: number): void {
		this.center.move(x, y);
	}

	getArea(): number {
		return Math.PI * this.radius * this.radius;
	}
	getPerimeter(): number {
		return 2 * Math.PI * this.radius;
	}

	toString(): string {
		return `Circle with center ${this.center.toString()} and radius ${this.radius}`;
	}
}