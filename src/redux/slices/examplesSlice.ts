import { IExample } from './../../interfaces/example.interface';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFetchExamples {
	offset: number;
	step: number;
}

export const fetchExamplesBySteps = createAsyncThunk(
	'examples/fetchExamples',
	async (option: IFetchExamples) => {
		const response = await fetch(`http://localhost:8080/examples?id_gte=${option.offset + 1}&id_lte=${option.offset + option.step + 1}`);
		return (await response.json()) as IExample[];
	}
);

interface IExamplesSliceInitialState {
	step: number;
	offset: number;
	examples: IExample[];
	everythingIsLoaded: boolean;
	loadingStatus: 'idle' | 'loading' | 'error';
}

const initialState: IExamplesSliceInitialState = {
	step: 9,
	offset: 0,
	examples: [],
	everythingIsLoaded: false,
	loadingStatus: 'idle'
}

const examplesSlice = createSlice({
	name: 'examples',
	initialState,
	reducers: {

	},
	extraReducers: (builer) => {
		builer
			.addCase(fetchExamplesBySteps.pending, (state) => {
				state.loadingStatus = 'loading';
			})
			.addCase(fetchExamplesBySteps.fulfilled, (state, action: PayloadAction<IExample[]>) => {
				for (let i = 0; i < (action.payload.length === 10 ? 9 : action.payload.length); i++) {
					state.examples.push(action.payload[i]);
				}
				if (action.payload.length <= state.step) {
					state.everythingIsLoaded = true;
				}
				state.offset += state.step;
				state.loadingStatus = 'idle';
			})
			.addCase(fetchExamplesBySteps.rejected, (state) => {
				state.loadingStatus = 'error';
			})
	}
});

const { actions, reducer } = examplesSlice;

export const exampleReducer = reducer;
export const { } = actions;