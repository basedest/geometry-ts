import Point from './Point';
import IShape from './lib/Shape';


/**
 * Class that represents a Circle in 2D space.
 * 
 * @public
 */
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

	/**
	 * Diameter getter.
	 * 
	 * @returns number - diameter of the circle.
	 */
	get diameter(): number {
		return 2 * this.radius;
	}

	/**
	 * Area getter.
	 * 
	 * @returns number - area of the circle.
	 */
	get area(): number {
		return Math.PI * this.radius * this.radius;
	}

	/**
	 * Computes the circumference of the circle.
	 * 
	 * @returns number - circumference of the circle.
	 */
	get circumference(): number {
		return Math.PI * this.diameter;
	}

	/**
	 * Object stringifier.
	 * 
	 * @returns string - some information about the circle.
	 */
	toString(): string {
		return `Circle with center ${this.center.toString()} and radius ${this.radius}`;
	}
}