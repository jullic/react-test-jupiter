import { FC } from 'react';
import { IBtnProps } from './Btn.props';
import './Btn.style.scss';

const Btn: FC<IBtnProps> = ({ children, className, load }) => {
	return <button className={`btn ${className}${load ? ' btn_load' : ''}`}>{children}</button>;
}

export default Btn;