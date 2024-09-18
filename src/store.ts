import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducer';
import { productsSlice } from './productsReducer';

export const store = configureStore({
    reducer: {
        sortingReducer: counterSlice.reducer,
        dataReducer: productsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
