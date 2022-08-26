"use strict";
// Testing internal library features using classes RegularPolygon and and Point.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const RegularPolygon_1 = __importDefault(require("../src/lib/RegularPolygon"));
test('Making Hexagon class and testing inherited methods', () => {
    class Hexagon extends RegularPolygon_1.default {
        constructor(center, radius) {
            super(center, radius, 6);
        }
        toString() {
            return `Hexagon with center ${this.center.toString()} and radius ${this.radius}`;
        }
    }
    const hexagon = new Hexagon(new index_1.Point(0, 0), 10);
    const expectedLog = 'Hexagon with center (0, 0) and radius 10 with area 300 and perimeter 60';
    const actualLog = `${hexagon.toString()} with area ${Math.round(hexagon.area)} and perimeter ${Math.round(hexagon.perimeter)}`;
    expect(actualLog).toBe(expectedLog);
});
//# sourceMappingURL=Hexagon.test.js.map