/** App icon that swaps to the dark variant with the system appearance. */
export default function AppIcon({ size, className }: { size: number; className?: string }) {
	return (
		<picture>
			<source srcSet="/icon-dark.png" media="(prefers-color-scheme: dark)" />
			<img src="/icon.png" alt="" width={size} height={size} className={className} />
		</picture>
	);
}
