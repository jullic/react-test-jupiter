import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchExamplesBySteps } from '../../redux/slices/examplesSlice';
import Btn from '../btn/Btn';
import Example from '../example/Example';
import { IExamplesProps } from './Examples.props';
import './Examples.style.scss';

const Examples: FC<IExamplesProps> = ({ className }) => {
	const { offset, step, everythingIsLoaded } = useAppSelector(state => state.exampleReducer);
	const examples = useAppSelector(state => {
		let examples = state.exampleReducer.examples;
		if (state.filterReducer.activeFilter === 'all') {
			return examples;
		}
		return examples = examples.filter(example => example.tag.filterValueType === state.filterReducer.activeFilter);
	})
	const dispatch = useAppDispatch();

	useEffect(() => {
		loadHandler();
	}, []);

	const loadHandler = () => {
		dispatch(fetchExamplesBySteps({ offset, step }));
	}

	return (
		<div className={`examples ${className}`}>
			<div className="examples__wrapper">
				{examples.map(({ id, photo, name, tag }) => <Example key={id} photo={photo} name={name} tag={{ filterValueType: tag.filterValueType, tagsType: tag.tagsType }} >{name}</Example>)}
			</div>
			{!everythingIsLoaded && <Btn className="examples__btn" load onClick={loadHandler}>Load More</Btn>}
		</div>
	);
}

export default Examples;