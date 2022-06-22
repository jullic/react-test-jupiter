import { FC } from 'react';
import { ITextProps } from './Text.props';
import './Text.style.scss';


const Text: FC<ITextProps> = ({ children, className }) => {
	return <p className={`text ${className}`}>{children}</p>;
}

export default Text;