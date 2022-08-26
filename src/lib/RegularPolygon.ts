import Point from './Point';
import Polygon from './Polygon';

function getvertices(center: Point, radius: number, numberOfSides: number): Point[] {
	const vertices = [];
	for (let i = 0; i < numberOfSides; i++) {
		const angle = (i * 2 * Math.PI) / numberOfSides;
		vertices.push(new Point(center.x + radius * Math.cos(angle), center.y + radius * Math.sin(angle)));
	}
	return vertices;
}

export default class RegularPolygon extends Polygon {
	center: Point;
	radius: number;
	numberOfSides: number;
	constructor(center: Point, radius: number, numberOfSides: number) {
		super(getvertices(center, radius, numberOfSides));
		this.center = center;
		this.radius = radius;
		this.numberOfSides = numberOfSides;
	}
	
	get area(): number {
		return (this.numberOfSides * this.radius * this.radius) / (4 * Math.tan(Math.PI / this.numberOfSides));
	}
	get perimeter(): number {
		return this.numberOfSides * this.radius * Math.PI / this.numberOfSides;
	}
	toString(): string {
		return `RegularPolygon with center ${this.center.toString()} and radius ${this.radius}`;
	}
}