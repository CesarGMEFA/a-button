import {
	ReactNode,
	useRef,
	useLayoutEffect,
	useState,
	MouseEventHandler,
} from 'react';
// import classNames from 'classnames';
import { rippleEffect } from './rippleEffect';

import './Button.css';

interface Props {
	children: ReactNode;
	variant?: 'text' | 'contained' | 'outlined';
	size?: 'small' | 'medium' | 'large';
	color?: 'error' | 'success' | 'secondary';
	disabled?: boolean;
	click?: MouseEventHandler<HTMLButtonElement> | undefined;
	upload?: boolean;
}

export default function Button({
	children,
	variant = 'text',
	size = 'medium',
	disabled = false,
	color,
	click,
	upload
}: Props): JSX.Element {
	const [colorChecking, setColorChecking] = useState('');
	const btn = useRef<HTMLButtonElement>(null);

	useLayoutEffect(() => {
		if (color === 'error') {
			rippleEffect(btn.current, '#d32f2f');
			setColorChecking(color);
		} else if (color === 'success') {
			rippleEffect(btn.current, '#2e7d32');
			setColorChecking(color);
		} else if (color === 'secondary') {
			rippleEffect(btn.current, '#9c27b0');
			setColorChecking(color);
		}
		rippleEffect(btn.current, '#9097f7');
	}, [color]);

	// const styles = classNames('Button', `Button-${variant}`, `Button-${size}`);

	return (
		<>
			<button
				className={[
					'Button',
					`Button-${variant}`,
					`Button-${size}`,
					`Button-${colorChecking}`,
				].join(' ')}
				ref={btn}
				disabled={disabled}
				onClick={click}
			>
				{(upload??false) && <input className='input-upload' data-testid="Upload images" accept="image/*" multiple type="file" />}
				{children}
			</button>
		</>
	);
}

// function UploadInput() {
// 	return (

// 	)
// }