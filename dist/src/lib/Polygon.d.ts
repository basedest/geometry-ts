import Point from '../Point';
import IShape from './Shape';
/**
 * Class that represents a Polygon in 2D space.
 *
 * @internal
 */
export default class Polygon implements IShape {
    protected vertices: Point[];
    /**
     * Polygon constructor.
     *
     * @param vertices - array of vertices of the polygon.
     */
    constructor(vertices: Point[]);
    /**
     * Scales the polygon by a given scale factor.
     *
     * @param scale : scale factor;
     *
     * @returns void
     */
    scale(scale: number): void;
    /**
     * Moves the polygon by adjusting the vertices coordinates.
     *
     * @param x - x-offset to move the polygon to.
     * @param y - y-offset to move the polygon to.
     *
     * @returns void
     */
    move(x: number, y: number): void;
    /**
     * Object stringifier.
     *
     * @returns string - some information about the polygon.
     */
    toString(): string;
}
