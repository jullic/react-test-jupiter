import { FC } from 'react';
import { IFilterItemProps } from './FilterItem.props';

const FilterItem: FC<IFilterItemProps> = ({ isActive, children, className, ...props }) => {
	return (
		<div className={`${className}${isActive ? ' active' : ''}`} {...props}>{children}</div>
	);
}

export default FilterItem;