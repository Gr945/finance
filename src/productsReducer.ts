import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { AddProductType, ProductType } from './types';

export interface ProductsState {
    products: ProductType[];
}

const initialState = {
    products: [] as ProductType[],
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },
        addProduct: (state, action: PayloadAction<AddProductType>) => {
            const { bar, art, size, category } = action.payload;
            state.products.push({
                rowId: state.products.length + 1,
                barCode: bar || 0,
                item: category,
                art: art?.toString() || '',
                size: size?.toString() || '',
                available: Math.floor(Math.random() * 100) + 1,
                products: Math.floor(Math.random() * 100) + 1,
                allProducts: Math.floor(Math.random() * 100) + 1,
            });
        },
    },
});

export const { changeProducts, addProduct } = productsSlice.actions;

export const selectCount = (state: RootState) => state.dataReducer;

export default productsSlice.reducer;
