"use strict";
// Testing public library features using classes Rectangle and and Point.
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
test('Making Square class and testing inherited methods', () => {
    class Square extends gl.Rectangle {
        constructor(topLeft, sideLenght) {
            super(topLeft, new gl.Point(topLeft.x + sideLenght, topLeft.y + sideLenght));
            this.sideLenght = sideLenght;
        }
        toString() {
            return `Square with top left corner ${this.vertices[0].toString()} and side ${this.sideLenght}`;
        }
    }
    const square = new Square(new gl.Point(0, 0), 10);
    const expectedLog = 'Square with top left corner (0, 0) and side 10 with area 100 and perimeter 40';
    const actualLog = `${square.toString()} with area ${square.area} and perimeter ${square.perimeter}`;
    expect(actualLog).toBe(expectedLog);
});
//# sourceMappingURL=Square.test.js.map