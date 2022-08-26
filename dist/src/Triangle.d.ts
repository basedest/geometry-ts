import Point from './Point';
import Polygon from './lib/Polygon';
/**
 * Class that represents a Triangle in 2D space.
 *
 * @public
 */
export default class Triangle extends Polygon {
    edges: number[];
    /**
     * Object constructor.
     *
     * @param a - first vertex of the triangle.
     * @param b - second vertex of the triangle.
     * @param c - third vertex of the triangle.
     */
    constructor(a: Point, b: Point, c: Point);
    /**
     * Perimeter getter.
     *
     * @returns number - perimeter of the triangle.
     */
    get perimeter(): number;
    /**
     * Area getter.
     *
     * @returns number - area of the triangle.
     */
    get area(): number;
    /**
     * Object stringifier.
     *
     * @returns string - some information about the triangle.
     */
    toString(): string;
}
