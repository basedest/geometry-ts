"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents a Polygon in 2D space.
 *
 * @internal
 */
class Polygon {
    /**
     * Polygon constructor.
     *
     * @param vertices - array of vertices of the polygon.
     */
    constructor(vertices) {
        this.vertices = vertices;
    }
    /**
     * Scales the polygon by a given scale factor.
     *
     * @param scale : scale factor;
     *
     * @returns void
     */
    scale(scale) {
        this.vertices.forEach(point => point.scale(scale));
    }
    /**
     * Moves the polygon by adjusting the vertices coordinates.
     *
     * @param x - x-offset to move the polygon to.
     * @param y - y-offset to move the polygon to.
     *
     * @returns void
     */
    move(x, y) {
        this.vertices.forEach(point => point.move(x, y));
    }
    /**
     * Object stringifier.
     *
     * @returns string - some information about the polygon.
     */
    toString() {
        return `Polygon with ${this.vertices.length} vertices`;
    }
}
exports.default = Polygon;
//# sourceMappingURL=Polygon.js.map