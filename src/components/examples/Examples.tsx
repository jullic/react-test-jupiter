import { FC } from 'react';
import Btn from '../btn/Btn';
import Example from '../example/Example';
import { IExamplesProps } from './Examples.props';
import './Examples.style.scss';

const Examples: FC<IExamplesProps> = ({ className }) => {
	return (
		<div className={`examples ${className}`}>
			<div className="examples__wrapper">
				<Example className='examples__item' />
			</div>
			<Btn className="examples__btn" load>Load More</Btn>
		</div>
	);
}

export default Examples;