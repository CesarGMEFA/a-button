import {
	ReactNode,
	useRef,
	useLayoutEffect,
	useState,
	MouseEventHandler,
} from 'react';
// import classNames from 'classnames';
import { useRippleEffect } from './useRippleEffect';

import './Button.css';

interface Props {
	children: ReactNode;
	variant?: 'text' | 'contained' | 'outlined';
	size?: 'small' | 'medium' | 'large';
	color?: 'error' | 'success' | 'secondary';
	disabled?: boolean;
	click?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
	children,
	variant = 'text',
	size = 'medium',
	disabled = false,
	color,
	click,
}: Props): JSX.Element {
	const [colorChecking, setColorChecking] = useState('');
	const btn = useRef<HTMLButtonElement>(null);

	useLayoutEffect(() => {
		if (color === 'error') {
			useRippleEffect(btn.current, '#d32f2f');
			setColorChecking(color);
		} else if (color === 'success') {
			useRippleEffect(btn.current, '#2e7d32');
			setColorChecking(color);
		} else if (color === 'secondary') {
			useRippleEffect(btn.current, '#9c27b0');
			setColorChecking(color);
		}
		useRippleEffect(btn.current, '#9097f7');
	});

	// const styles = classNames('Button', `Button-${variant}`, `Button-${size}`);

	return (
		<>
			<button
				className={['Button', `Button-${variant}`, `Button-${size}`, `Button-${colorChecking}`].join(' ')}
				aria-label='un-boton'
				ref={btn}
				disabled={disabled}
				onClick={click}
			>
				{children}
			</button>
		</>
	);
}
