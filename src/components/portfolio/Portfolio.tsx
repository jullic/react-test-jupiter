import { FC } from 'react';
import Examples from '../examples/Examples';
import Filter from '../filter/Filter';
import { IPortfolioProps } from './Portfolio.props';
import './Portfolio.style.scss';

const Portfolio: FC<IPortfolioProps> = () => {
	return (
		<div className="portfolio">
			<div className="container">
				<Filter typeOfDevice='desktop' />
				<Examples className='portfolio__examples' />
			</div>
		</div>
	);
}

export default Portfolio;