import Point from './Point';
import Polygon from './Polygon';

function getPoints(center: Point, radius: number, numberOfSides: number): Point[] {
	const points = [];
	for (let i = 0; i < numberOfSides; i++) {
		const angle = (i * 2 * Math.PI) / numberOfSides;
		points.push(new Point(center.x + radius * Math.cos(angle), center.y + radius * Math.sin(angle)));
	}
	return points;
}

export default class RegularPolygon extends Polygon {
	center: Point;
	radius: number;
	numberOfSides: number;
	constructor(center: Point, radius: number, numberOfSides: number) {
		super(getPoints(center, radius, numberOfSides));
		this.center = center;
		this.radius = radius;
		this.numberOfSides = numberOfSides;
	}
    
	getArea(): number {
		return (this.numberOfSides * this.radius * this.radius) / (4 * Math.tan(Math.PI / this.numberOfSides));
	}
	getPerimeter(): number {
		return this.numberOfSides * this.radius * Math.PI / this.numberOfSides;
	}
	toString(): string {
		return `RegularPolygon with center ${this.center.toString()} and radius ${this.radius}`;
	}
}