import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
}

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, actions) => {
            const {name} = actions.payload;
            const [lastCat] = state.cats.slice(-1);
            const id = lastCat ? lastCat.id + 1 : 1;
            state.cats.push({id, name});
        },
        deleteCat: (state, actions) => {
            const {id} = actions.payload;
            const index = state.cats.findIndex((value) => value.id === id);
            state.cats.splice(index, 1);
        },
        updateCat: (state, actions) => {
            // const {cat} = actions.payload;
        },
    },
});

const {reducer: catReducer, actions: {addCat, deleteCat, updateCat}} = catSlice;
export default catReducer;

export const catActions = {
    addCat,
    deleteCat,
    updateCat
}