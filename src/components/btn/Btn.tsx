import { FC } from 'react';
import { IBtnProps } from './Btn.props';
import './Btn.style.scss';

const Btn: FC<IBtnProps> = ({ children, className, load, disabled, ...props }) => {
	return (
		<button
			disabled={disabled}
			className={`btn ${className}${load ? ' btn_load' : ''}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default Btn;