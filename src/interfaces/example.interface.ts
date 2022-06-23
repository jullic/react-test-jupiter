import { FilterValueType, TagsType } from './filter.interface';


export interface IExample {
	id: number;
	active: boolean;
	photo: string;
	tag: {
		tagsType: TagsType;
		filterValueType: FilterValueType;
	};
	name: string;
}