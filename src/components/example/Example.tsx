import { FC } from 'react';
import { IExampleProps } from './Example.props';
import './Example.style.scss';

const Example: FC<IExampleProps> = ({ photo, name, tag, className, active, ...props }) => {

	return (
		<div className={`example ${className}${active ? ' active' : ''}`} {...props}>
			<img src={photo} alt={name} className="example__img" />
			<div className="example__overlay">
				<div className="example__info">
					<div className="example__tag">{tag.tagsType}</div>
					<div className="example__name">{name}</div>
				</div>
			</div>
		</div>
	);
}

export default Example;