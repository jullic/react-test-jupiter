export type TagsType = 'Design' | 'Branding' | 'Illustration' | 'Motion'
export type FilterValueType = 'all' | 'design' | 'branding' | 'illustration' | 'motion';

export interface IFilter {
	filterTag: FilterValueType;
	filterName: 'Show All' | TagsType;
}