"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __importDefault(require("./Point"));
const Polygon_1 = __importDefault(require("./lib/Polygon"));
/**
 * Class that represents a Rectangle in 2D space.
 *
 * @public
 */
class Rectangle extends Polygon_1.default {
    /**
     * Object constructor.
     *
     * @param topLeft - coordinates of top left corner of the rectangle.
     * @param bottomRight - coordinates of bottom right corner of the rectangle.
     */
    constructor(topLeft, bottomRight) {
        super([
            topLeft,
            new Point_1.default(bottomRight.x, topLeft.y),
            bottomRight,
            new Point_1.default(topLeft.x, bottomRight.y)
        ]);
    }
    /**
     * Width getter.
     *
     * @returns number - width of the rectangle.
     */
    get width() {
        return this.vertices[2].x - this.vertices[0].x;
    }
    /**
     * Height getter.
     *
     * @returns number - height of the rectangle.
     *
     */
    get height() {
        return this.vertices[2].y - this.vertices[0].y;
    }
    /**
     * Area getter.
     *
     * @returns number - area of the rectangle.
     */
    get area() {
        return this.width * this.height;
    }
    /**
     * Perimeter getter.
     *
     * @returns number - perimeter of the rectangle.
     */
    get perimeter() {
        return (this.width + this.height) * 2;
    }
    /**
     * Object stringifier.
     *
     * @returns string - some information about the rectangle.
     */
    toString() {
        return `Rectangle with top left ${this.vertices[0].toString()} and bottom right ${this.vertices[2].toString()}`;
    }
}
exports.default = Rectangle;
//# sourceMappingURL=Rectangle.js.map