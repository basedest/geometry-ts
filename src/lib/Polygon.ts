import Point from './Point';
import IShape from './Shape';


/**
 * Class that represents a Polygon in 2D space.
 * 
 * @internal
 */
export default class Polygon implements IShape {
	vertices: Point[];
	constructor(vertices: Point[]) {
		this.vertices = vertices;
	}
	toString(): string {
		return `Polygon with ${this.vertices.length} vertices`;
	}
	scale(scale: number): void {
		this.vertices.forEach(point => point.scale(scale));
	}
	move(x: number, y: number): void {
		this.vertices.forEach(point => point.move(x, y));
	}
}