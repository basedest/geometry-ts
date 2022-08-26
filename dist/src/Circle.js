"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents a Circle in 2D space.
 *
 * @public
 */
class Circle {
    /**
     * Constructor for the circle class.
     *
     * @param center - center of the circle
     * @param radius - radius of the circle
     */
    constructor(center, radius) {
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
    scale(scale) {
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
    move(x, y) {
        this.center.move(x, y);
    }
    /**
     * Diameter getter.
     *
     * @returns number - diameter of the circle.
     */
    get diameter() {
        return 2 * this.radius;
    }
    /**
     * Area getter.
     *
     * @returns number - area of the circle.
     */
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    /**
     * Computes the circumference of the circle.
     *
     * @returns number - circumference of the circle.
     */
    get circumference() {
        return Math.PI * this.diameter;
    }
    /**
     * Object stringifier.
     *
     * @returns string - some information about the circle.
     */
    toString() {
        return `Circle with center ${this.center.toString()} and radius ${this.radius}`;
    }
}
exports.default = Circle;
//# sourceMappingURL=Circle.js.map