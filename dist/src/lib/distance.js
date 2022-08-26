"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds the distance between two points.
 *
 * @param p1 - first point of the line.
 * @param p2 - second point of the line.
 * @returns number - length of the line.
 *
 * @internal
 */
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
exports.default = distance;
//# sourceMappingURL=distance.js.map