import { FC, memo, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { FilterValueType } from '../../interfaces/filter.interface';
import { disactiveExamples, fetchExamplesBySteps } from '../../redux/slices/examplesSlice';
import { changeFilter } from '../../redux/slices/filterSlice';
import Btn from '../btn/Btn';
import Example from '../example/Example';
import { IExamplesProps } from './Examples.props';
import './Examples.style.scss';

const Examples: FC<IExamplesProps> = ({ className }) => {
	const { isMobile } = useMatchMedia();
	const { offset, step, everythingIsLoaded, loadingStatus } = useAppSelector(state => state.exampleReducer);
	const examples = useAppSelector(state => {
		let examples = state.exampleReducer.examples;
		if (state.filterReducer.activeFilter === 'all') {
			return examples;
		}
		return examples = examples.filter(example => example.tag.filterValueType === state.filterReducer.activeFilter);
	});
	const dispatch = useAppDispatch();

	useEffect(() => {
		loadHandler();
	}, []);

	useEffect(() => {
		dispatch(disactiveExamples());
	}, [isMobile]);

	const loadHandler = () => {
		if (loadingStatus === 'idle') {
			dispatch(fetchExamplesBySteps({ offset, step }));
		}
	};

	const changeFilterHandler = useCallback((fillter: FilterValueType, isMobile: boolean) => {
		if (!isMobile) {
			dispatch(changeFilter(fillter));
		}
	}, []);

	if (loadingStatus === 'error') {
		return (
			<h2 className='examples__error'>Произошла ошибка, возможно не включен json-server</h2>
		);
	}

	return (
		<div className={`examples ${className}`}>
			<div className="examples__wrapper">
				{examples.length > 0 ?
					examples.map(({ id, photo, name, tag, active }) =>
						<Example
							isMobile={isMobile}
							key={id}
							exampleId={id}
							photo={photo}
							name={name}
							tag={{ filterValueType: tag.filterValueType, tagsType: tag.tagsType }}
							active={active}
							changeFilterHandler={changeFilterHandler}
						>
							{name}
						</Example>)
					:
					null
				}
			</div>
			{loadingStatus === 'loading' && <p className='examples__loading'>Loading...</p>}
			{examples.length === 0 && <p className='examples__warn'>Отсутствуют примеры по указанному тегу</p>}
			{
				!everythingIsLoaded
				&&
				<Btn
					className="examples__btn"
					disabled={loadingStatus === 'loading'}
					load
					onClick={loadHandler}
				>
					Load More
				</Btn>
			}
		</div>
	);
}

export default memo(Examples);