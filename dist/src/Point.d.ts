/**
 * Class that represents a point in 2D space.
 *
 * @public
 */
export default class Point {
    x: number;
    y: number;
    /**
     * Point constructor.
     *
     * @param x - x-coordinate of the point.
     * @param y - y-coordinate of the point.
     */
    constructor(x: number, y: number);
    /**
     * Scales the point by a given scale factor.
     *
     * @param scale - scale factor.
     *
     * @returns void
     */
    scale(scale: number): void;
    /**
     * Moves the point by adjusting the x and y coordinates.
     *
     * @param x - x-coordinate of the point to move the circle to.
     * @param y - y-coordinate of the point to move the circle to.
     *
     * @returns void
     */
    move(x: number, y: number): void;
    /**
     * Object stringifier.
     *
     * @returns string - string representation of the point coordinates.
     */
    toString(): string;
}
