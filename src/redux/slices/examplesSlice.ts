import { IExample } from './../../interfaces/example.interface';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFetchExamples {
	offset: number;
	step: number;
}

export const fetchExamplesBySteps = createAsyncThunk(
	'examples/fetchExamples',
	async (option: IFetchExamples, { dispatch }) => {
		const response = await fetch(`http://localhost:8080/examples?id_gte=${option.offset + 1}&id_lte=${option.offset + option.step + 1}`)
		return (await response.json()) as IExample[];

	}
);

export const fetchExamplesDelete = createAsyncThunk(
	'examples/fetchExamplesDelete',
	async (id: number, { dispatch }) => {
		await fetch(`http://localhost:8080/examples/${id}`, {
			method: 'DELETE'
		})
			.then(() => dispatch(removeExample(id)))
			.catch(e => {
				console.log(e);
				dispatch(activeError());
			});
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
	loadingStatus: 'idle',
}

const examplesSlice = createSlice({
	name: 'examples',
	initialState,
	reducers: {
		removeExample(state, action: PayloadAction<number>) {
			state.examples = state.examples.filter(example => example.id !== action.payload);
		},
		toggleActive(state, action: PayloadAction<number>) {
			let currentExampleActive = state.examples.find(value => value.id === action.payload)?.active;
			state.examples = state.examples
				.map(example => ({ ...example, active: false }))
				.map(example => example.id === action.payload ? { ...example, active: !currentExampleActive } : example);

		},
		activeError(state) {
			state.loadingStatus = 'error';
		},
		disactiveExamples(state) {
			state.examples = state.examples.map(example => ({ ...example, active: false }));
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchExamplesBySteps.pending, (state) => {
				state.loadingStatus = 'loading';
			})
			.addCase(fetchExamplesBySteps.fulfilled, (state, action: PayloadAction<IExample[]>) => {
				for (let i = 0; i < (action.payload.length === 10 ? 9 : action.payload.length); i++) {
					state.examples.push({ ...action.payload[i], active: false });
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
export const { removeExample, toggleActive, activeError, disactiveExamples } = actions;