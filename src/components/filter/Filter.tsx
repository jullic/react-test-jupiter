import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { FilterValueType } from '../../interfaces/filter.interface';
import { changeFilter } from '../../redux/slices/filterSlice';
import FilterItem from '../filterItem/FilterItem';
import { IFilterProps } from './Filter.props';
import './Filter.style.scss';

const Filter: FC<IFilterProps> = () => {
	const { isMobile } = useMatchMedia();
	const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
	const { activeFilter, filters } = useAppSelector(state => state.filterReducer);
	const dispatch = useAppDispatch();

	const openHandler = () => {
		setIsOpenFilter(!isOpenFilter);
	};

	const changeFilterHandler = (fillter: FilterValueType) => {
		if (isMobile) {
			setIsOpenFilter(!isOpenFilter);
		}
		dispatch(changeFilter(fillter));
	};

	if (!isMobile) {
		return (
			<div className="filter portfolio__filter">
				{filters.map((filter, index) => <FilterItem onClick={() => activeFilter !== filter.filterTag && changeFilterHandler(filter.filterTag)} className='filter__item' key={index} isActive={activeFilter === filter.filterTag}>{filter.filterName}</FilterItem>)}
			</div >
		);
	}

	return (
		<div className={`filter-mobile${isOpenFilter ? ' open' : ''}`}>
			<div className="filter-mobile__header" onClick={openHandler}>
				<FilterItem
					className='filter-mobile__item-active'
					isActive={true}
				>
					{filters.find(filter => filter.filterTag === activeFilter)?.filterName}
				</FilterItem>
				<div className="filter-mobile__arrow">
					<svg width="10" height="6" viewBox="0 0 10 6" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M5 6L10 0H0L5 6Z" fill="#EF6D58" />
					</svg>
				</div>
			</div>
			<div className="filter-mobile__body">
				{filters.map((filter, index) =>
					<FilterItem
						key={index}
						className='filter-mobile__item'
						isActive={false}
						onClick={() => activeFilter !== filter.filterTag && changeFilterHandler(filter.filterTag)}
					>
						{filter.filterName}
					</FilterItem>)}
			</div>
		</div>
	);
}

export default Filter;