import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FilterValueType, TagsType } from '../../interfaces/filter.interface';

export interface IExampleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean;
	photo: string;
	exampleId: number;
	isMobile: boolean;
	tag: {
		tagsType: TagsType;
		filterValueType: FilterValueType;
	};
	changeFilterHandler: (filter: FilterValueType, isMobile: boolean) => void;
	name: string;
}