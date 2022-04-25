import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
}

const dogsSlice = createSlice({
    name: 'dogsSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {dogName} = action.payload;
            const [lastDog] = state.dogs.slice(-1);
            const id = lastDog ? lastDog.id + 1 : 1;
            const newDog = {id, name: dogName}
            state.dogs.push(newDog);
        },
        deleteById: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex((value) => value.id === id);
            state.dogs.splice(index, 1);
        }
    }
});

const {reducer: dogReducer, actions: {add, deleteById}} = dogsSlice;

export default dogReducer;
export const dogsActions = {
    add, deleteById
}