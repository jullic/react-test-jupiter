import { FC } from 'react';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { IFilterProps } from './Filter.props';
import './Filter.style.scss';

const Filter: FC<IFilterProps> = () => {
	const { isMobile } = useMatchMedia();

	if (!isMobile) {
		return (
			<ul className="filter portfolio__filter">
				<li className="filter__item active">Show All</li>
				<li className="filter__item">Design</li>
				<li className="filter__item">Branding</li>
				<li className="filter__item">Illustration</li>
				<li className="filter__item">Motion</li>
			</ul>
		);
	}

	return (
		<div className="filter-mobile">
			<div className="filter-mobile__header">
				<div className="filter-mobile__item-active">Show All</div>
				<div className="filter-mobile__arrow">
					<svg width="10" height="6" viewBox="0 0 10 6" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M5 6L10 0H0L5 6Z" fill="#EF6D58" />
					</svg>
				</div>
			</div>
			<div className="filter-mobile__body">
				<div className="filter-mobile__item">Show All</div>
				<div className="filter-mobile__item">Design</div>
				<div className="filter-mobile__item">Branding</div>
				<div className="filter-mobile__item">Illustration</div>
				<div className="filter-mobile__item">Motion</div>
			</div>
		</div>
	);

}

export default Filter;