"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __importDefault(require("../Point"));
const Polygon_1 = __importDefault(require("./Polygon"));
/**
 * Helper function to create vertices for Polygon base class.
 *
 * @param center - center of the regular polygon.
 * @param radius - radius of the regular polygon.
 * @param numberOfSides - number of sides of the regular polygon.
 * @returns array of points - vertices of the regular polygon.
 *
 * @internal
 *
 * @privateRemarks
 *
 * This function is not a RegularPolygon class member because it needs to be called from the Polygon class constructor.
 */
function getVertices(center, radius, numberOfSides) {
    const vertices = [];
    for (let i = 0; i < numberOfSides; i++) {
        const angle = (i * 2 * Math.PI) / numberOfSides;
        vertices.push(new Point_1.default(center.x + radius * Math.cos(angle), center.y + radius * Math.sin(angle)));
    }
    return vertices;
}
/**
 * Class that represents a regular polygon in 2D space.
 *
 * @internal
 *
 * @see {@link https://en.wikipedia.org/wiki/Regular_polygon}
 */
class RegularPolygon extends Polygon_1.default {
    /**
     * Object constructor.
     *
     * @param center - center of the regular polygon.
     * @param radius - radius of the regular polygon.
     * @param numberOfSides - number of sides of the regular polygon.
     */
    constructor(center, radius, numberOfSides) {
        super(getVertices(center, radius, numberOfSides));
        this.center = center;
        this.radius = radius;
        this.numberOfSides = numberOfSides;
    }
    /**
     * Side length getter.
     *
     * @returns number - side length of the regular polygon.
     */
    get sideLength() {
        return this.radius * 2 * Math.sin(Math.PI / this.numberOfSides);
    }
    /**
     * Perimeter getter.
     *
     * @returns number - perimeter of the regular polygon.
     */
    get perimeter() {
        return this.numberOfSides * this.sideLength;
    }
    /**
     * Area getter.
     *
     * @returns number - area of the regular polygon.
     */
    get area() {
        return 0.5 * this.perimeter * this.radius;
    }
    /**
     * Object stringifier.
     *
     * @returns string - some information about the regular polygon.
     */
    toString() {
        return `RegularPolygon with center ${this.center.toString()} and radius ${this.radius}`;
    }
}
exports.default = RegularPolygon;
//# sourceMappingURL=RegularPolygon.js.map