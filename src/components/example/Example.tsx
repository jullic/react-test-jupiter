import { FC, KeyboardEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchExamplesDelete, toggleActive } from '../../redux/slices/examplesSlice';
import { IExampleProps } from './Example.props';
import './Example.style.scss';

const Example: FC<IExampleProps> = ({ photo, name, tag, className, exampleId, changeFilterHandler, active, isMobile, ...props }) => {
	const dispatch = useAppDispatch();
	const { activeFilter } = useAppSelector(state => state.filterReducer);

	const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Backspace' && active) {
			dispatch(fetchExamplesDelete(exampleId));
		}
	};

	const onClickHandler = () => {
		if (!isMobile) {
			dispatch(toggleActive(exampleId));
		}
	};

	return (
		<div
			tabIndex={0}
			onKeyDown={onKeyDownHandler}
			className={`example ${className} ${active ? 'active' : ''}`}
			onClick={onClickHandler}
			{...props}
		>
			<img src={photo} alt={name} className="example__img" />
			<div className="example__overlay">
				<div className="example__info">
					<div
						className="example__tag"
						onClick={(e) => {
							e.stopPropagation();
							return tag.filterValueType !== activeFilter && changeFilterHandler(tag.filterValueType, isMobile)
						}}
					>
						{tag.tagsType}
					</div>
					<div className="example__name">{name}</div>
				</div>
			</div>
		</div>
	);
}

export default Example;
