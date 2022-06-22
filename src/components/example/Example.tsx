import { FC } from 'react';
import { IExampleProps } from './Example.props';
import './Example.style.scss';

const Example: FC<IExampleProps> = ({ className, active }) => {
	return (
		<div className={`example ${className}${active ? ' active' : ''}`}>
			<img src="ex1.jpg" alt="" className="example__img" />
			<div className="example__overlay">
				<div className="example__info">
					<div className="example__tag">Design</div>
					<div className="example__name">SOFA</div>
				</div>
			</div>
		</div>
	);
}

export default Example;