import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../api/useGetData";

interface ProductState {
    selectedProduct?: Product
}

const initialState: ProductState = {}

const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload;
        }
    }
});


export const {setSelected} = productSlice.actions;

export default productSlice.reducer;