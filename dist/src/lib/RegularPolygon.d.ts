import Point from '../Point';
import Polygon from './Polygon';
/**
 * Class that represents a regular polygon in 2D space.
 *
 * @internal
 *
 * @see {@link https://en.wikipedia.org/wiki/Regular_polygon}
 */
export default class RegularPolygon extends Polygon {
    center: Point;
    radius: number;
    numberOfSides: number;
    /**
     * Object constructor.
     *
     * @param center - center of the regular polygon.
     * @param radius - radius of the regular polygon.
     * @param numberOfSides - number of sides of the regular polygon.
     */
    constructor(center: Point, radius: number, numberOfSides: number);
    /**
     * Side length getter.
     *
     * @returns number - side length of the regular polygon.
     */
    get sideLength(): number;
    /**
     * Perimeter getter.
     *
     * @returns number - perimeter of the regular polygon.
     */
    get perimeter(): number;
    /**
     * Area getter.
     *
     * @returns number - area of the regular polygon.
     */
    get area(): number;
    /**
     * Object stringifier.
     *
     * @returns string - some information about the regular polygon.
     */
    toString(): string;
}
