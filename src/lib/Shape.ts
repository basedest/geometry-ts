/**
 * Interface that represents a shape on 2D space and basic operations on it.
 * 
 * @internal
 */
export default interface IShape {
	move(x: number, y: number): void;
	scale(scale: number): void;
	toString(): string;
}