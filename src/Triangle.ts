import Point from './Point';
import Polygon from './lib/Polygon';

/**
 * Class that represents a Triangle in 2D space.
 * 
 * @public
 */
export default class Triangle extends Polygon {
	
	/**
	 * Object constructor.
	 * 
	 * @param a - first vertex of the triangle.
	 * @param b - second vertex of the triangle.
	 * @param c - third vertex of the triangle.
	 */
	constructor(a: Point, b: Point, c: Point) {
		super([a, b, c]);
	}

	/**
	 * Object stringifier.
	 * 
	 * @returns string - some information about the triangle.
	 */
	toString(): string {
		return `Triangle with vertices ${this.vertices.map(p => p.toString()).join(', ')}`;
	}
}