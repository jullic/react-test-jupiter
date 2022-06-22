import { FC } from 'react';
import { ITitleProps } from './Title.props';
import './Title.style.scss';

const Title: FC<ITitleProps> = ({ children, className }) => {
	return (
		<h1 className={`title ${className}`}>{children}</h1>
	);
}

export default Title;