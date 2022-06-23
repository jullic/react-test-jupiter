import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from './slices/examplesSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
	reducer: {
		filterReducer,
		exampleReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;