/**
 * Interface that represents a shape on 2D space and basic operations on it.
 *
 * @internal
 */
export default interface IShape {
    /**
     * Moves the shape by offset given by x and y parameters.
     *
     * @param x - x-offset to move the shape to.
     * @param y - y-offset to move the shape to.
     */
    move(x: number, y: number): void;
    /**
     * Scales the shape by a given scale factor.
     *
     * @param scale : scale factor;
     */
    scale(scale: number): void;
    /**
     * Object stringifier.
     *
     * @returns string - some information about the shape.
     */
    toString(): string;
}
