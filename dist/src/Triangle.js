"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Polygon_1 = __importDefault(require("./lib/Polygon"));
const distance_1 = __importDefault(require("./lib/distance"));
/**
 * Class that represents a Triangle in 2D space.
 *
 * @public
 */
class Triangle extends Polygon_1.default {
    /**
     * Object constructor.
     *
     * @param a - first vertex of the triangle.
     * @param b - second vertex of the triangle.
     * @param c - third vertex of the triangle.
     */
    constructor(a, b, c) {
        super([a, b, c]);
        this.edges = [
            (0, distance_1.default)(a, b),
            (0, distance_1.default)(b, c),
            (0, distance_1.default)(c, a)
        ];
    }
    /**
     * Perimeter getter.
     *
     * @returns number - perimeter of the triangle.
     */
    get perimeter() {
        return this.edges.reduce((a, b) => a + b);
    }
    /**
     * Area getter.
     *
     * @returns number - area of the triangle.
     */
    get area() {
        const p = this.perimeter / 2;
        return Math.sqrt(p * (p - this.edges[0]) * (p - this.edges[1]) * (p - this.edges[2]));
    }
    /**
     * Object stringifier.
     *
     * @returns string - some information about the triangle.
     */
    toString() {
        return `Triangle with vertices ${this.vertices.map(p => p.toString()).join(', ')}`;
    }
}
exports.default = Triangle;
//# sourceMappingURL=Triangle.js.map