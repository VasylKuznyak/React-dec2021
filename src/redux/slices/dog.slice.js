import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    dogForUpdate: null,
}

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, actions) => {
            const {dog} = actions.payload;
            const [lastDog] = state.dogs.slice(-1);
            const id = lastDog ? lastDog.id + 1 : 1;
            state.dogs.push({id, name: dog})
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex((value) => value.id === id);
            state.dogs.splice(index, 1);
        },
        updateDog: (state, action) => {
            const {dog} = action.payload;
            state.dogForUpdate = dog;
        },
        updatedDog: (state, action) => {
            const index = state.dogs.findIndex((dog) => dog.id === action.payload.id);
            state.dogs[index].name = action.payload.dog.dogName;
            state.dogForUpdate = null;
        }
    },
});

const {reducer: dogReducer, actions: {addDog, deleteDog, updateDog, updatedDog}} = dogSlice;
export default dogReducer;

export const dogActions = {
    addDog,
    deleteDog,
    updateDog,
    updatedDog
}