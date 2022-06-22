import { FilterValueType, TagsType } from '../types/filter.type';

export interface IFilter {
	filterTag: FilterValueType;
	filterName: 'Show All' | TagsType;
}