export function rippleEffect(
	btn: HTMLButtonElement | null,
	colorEffect: string
): void {
	btn?.addEventListener( 'mousedown', (e: { offsetX: number; offsetY: number }) => {
		const x = e.offsetX;
		const y = e.offsetY;

		const ripples = document.createElement('span');
		ripples.style.left = `${x}px`;
		ripples.style.top = `${y}px`;
		ripples.style.backgroundColor = `${colorEffect}`;

		btn?.appendChild(ripples);

		setTimeout(() => {
			ripples.remove();
		}, 300);
	});
}
