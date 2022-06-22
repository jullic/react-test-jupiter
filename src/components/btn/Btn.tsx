import { FC } from 'react';
import { IBtnProps } from './Btn.props';
import './Btn.style.scss';

const Btn: FC<IBtnProps> = ({ children, className, load, ...props }) => {
	return <button className={`btn ${className}${load ? ' btn_load' : ''}`} {...props}>{children}</button>;
}

export default Btn;