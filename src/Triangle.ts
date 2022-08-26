import Point from './Point';
import Polygon from './lib/Polygon';
import distance from './lib/distance';

/**
 * Class that represents a Triangle in 2D space.
 * 
 * @public
 */
export default class Triangle extends Polygon {
	
	edges: number[]; //lengths of the triangle's edges

	/**
	 * Object constructor.
	 * 
	 * @param a - first vertex of the triangle.
	 * @param b - second vertex of the triangle.
	 * @param c - third vertex of the triangle.
	 */
	constructor(a: Point, b: Point, c: Point) {
		super([a, b, c]);
		this.edges = [
			distance(a, b),
			distance(b, c),
			distance(c, a)
		];
	}

	/**
	 * Perimeter getter.
	 * 
	 * @returns number - perimeter of the triangle.
	 */
	get perimeter(): number {
		return this.edges.reduce((a, b) => a + b);
	}

	/**
	 * Area getter.
	 * 
	 * @returns number - area of the triangle.
	 */
	get area(): number {
		const p = this.perimeter / 2;
		return Math.sqrt(p * (p - this.edges[0]) * (p - this.edges[1]) * (p - this.edges[2]));
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