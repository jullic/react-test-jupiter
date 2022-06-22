import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from '../../interfaces/filter.interface';
import { FilterValueType } from '../../types/filter.type';

interface IFilterSliceInitialState {
	filters: IFilter[];
	activeFilter: FilterValueType;
}
const initialState: IFilterSliceInitialState = {
	filters: [{ filterName: 'Show All', filterTag: 'all' }, { filterName: 'Design', filterTag: 'design' }, { filterName: 'Branding', filterTag: 'branding' }, { filterName: 'Illustration', filterTag: 'illustration' }, { filterName: 'Motion', filterTag: 'motion' }],
	activeFilter: 'all'
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeFilter(state, action: PayloadAction<FilterValueType>) {
			state.activeFilter = action.payload;
		}
	}
});

const { actions, reducer } = filterSlice;

export const filterReducer = reducer;
export const { changeFilter } = actions