export default function getTransform(
	{ x, y, scale }: { x: number; y: number; scale: number }): string {
	return `translate(${x}px, ${y}px) scale(${scale})`
}