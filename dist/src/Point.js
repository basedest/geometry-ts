"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents a point in 2D space.
 *
 * @public
 */
class Point {
    /**
     * Point constructor.
     *
     * @param x - x-coordinate of the point.
     * @param y - y-coordinate of the point.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Scales the point by a given scale factor.
     *
     * @param scale - scale factor.
     *
     * @returns void
     */
    scale(scale) {
        this.x *= scale;
        this.y *= scale;
    }
    /**
     * Moves the point by adjusting the x and y coordinates.
     *
     * @param x - x-coordinate of the point to move the circle to.
     * @param y - y-coordinate of the point to move the circle to.
     *
     * @returns void
     */
    move(x, y) {
        this.x += x;
        this.y += y;
    }
    /**
     * Object stringifier.
     *
     * @returns string - string representation of the point coordinates.
     */
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}
exports.default = Point;
//# sourceMappingURL=Point.js.map