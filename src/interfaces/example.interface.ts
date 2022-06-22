import { FilterValueType, TagsType } from '../types/filter.type';

export interface IExample {
	id: number
	photo: string;
	tag: {
		tagsType: TagsType;
		filterValueType: FilterValueType;
	};
	name: string;
}