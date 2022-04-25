import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: []
}

const catsSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {catName} = action.payload;
            const [lastCat] = state.cats.slice(-1);
            const id = lastCat ? lastCat.id + 1 : 1;
            const newCat = {id, name: catName}
            state.cats.push(newCat);
        },
        deleteById: (state, action) => {
            const {id} = action.payload;
            const index = state.cats.findIndex((value) => value.id === id);
            state.cats.splice(index, 1);
        }
    }
});

const {reducer: catReducer, actions: {add, deleteById}} = catsSlice;

export default catReducer;
export const catsActions = {
    add, deleteById
}