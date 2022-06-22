import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FilterValueType, TagsType } from '../../types/filter.type';

export interface IExampleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active?: 'active';
	photo: string;
	tag: {
		tagsType: TagsType;
		filterValueType: FilterValueType;
	};
	name: string;
}