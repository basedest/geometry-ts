import Point from '../Point';

/**
 * Finds the distance between two points.
 * 
 * @param p1 - first point of the line.
 * @param p2 - second point of the line.
 * @returns number - length of the line.
 * 
 * @internal
 */
export default function distance(p1: Point, p2: Point): number {
	return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}