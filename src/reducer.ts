import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ProductKeys } from './types';

export interface CounterState {
    sorting: ProductKeys;
}

const initialState: CounterState = {
    sorting: 'allProducts',
};

export const counterSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        changeSort: (state, action: PayloadAction<ProductKeys>) => {
            state.sorting = action.payload;
        },
    },
});

export const { changeSort } = counterSlice.actions;

export const selectCount = (state: RootState) => state.sortingReducer;

export default counterSlice.reducer;
