import Point from './Point';
import IShape from './Shape';

export default class Circle implements IShape {
	center: Point;
	radius: number;

	constructor(center: Point, radius: number) {
		this.center = center;
		this.radius = radius;
	}
    
	getArea(): number {
		return Math.PI * this.radius * this.radius;
	}
	getPerimeter(): number {
		return 2 * Math.PI * this.radius;
	}

	toString(): string {
		return `Circle with center ${this.center.toString()} and radius ${this.radius}`;
	}
}