"use strict";
// Testing public library features using classes Circle and and Point.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gl = __importStar(require("../src/index"));
test('Making Circle class and testing featured methods', () => {
    const circle = new gl.Circle(new gl.Point(0, 0), 10);
    circle.move(-100, 200);
    circle.scale(2);
    const expectedLog = 'Circle with center (-100, 200) and radius 20 with area 1257 and circumference 126';
    const actualLog = `${circle.toString()} with area ${Math.round(circle.area)} and circumference ${Math.round(circle.circumference)}`;
    expect(actualLog).toBe(expectedLog);
});
//# sourceMappingURL=Circle.test.js.map