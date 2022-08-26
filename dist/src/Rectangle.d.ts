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
    constructor(topLeft: Point, bottomRight: Point);
    /**
     * Width getter.
     *
     * @returns number - width of the rectangle.
     */
    get width(): number;
    /**
     * Height getter.
     *
     * @returns number - height of the rectangle.
     *
     */
    get height(): number;
    /**
     * Area getter.
     *
     * @returns number - area of the rectangle.
     */
    get area(): number;
    /**
     * Perimeter getter.
     *
     * @returns number - perimeter of the rectangle.
     */
    get perimeter(): number;
    /**
     * Object stringifier.
     *
     * @returns string - some information about the rectangle.
     */
    toString(): string;
}
