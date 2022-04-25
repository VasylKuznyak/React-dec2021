import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        incCount1: (state) => {
            state.count += 1;
        },
        decCount1: (state) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = action.payload || 0;
        },

        incCount2: (state) => {
            state.count += 10;
        },
        decCount2: (state) => {
            state.count -= 10;
        },
    }
});

const {reducer: counterReducer, actions: {incCount1, decCount1, incCount2, decCount2, reset}} = counterSlice;

export default counterReducer;
export const counterActions = {
    incCount1, decCount1, incCount2, decCount2, reset,
};