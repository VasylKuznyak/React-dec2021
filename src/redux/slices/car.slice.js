import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.pending]: (state, action) => {
            console.log('pending');
        },
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload;
        },
        [getAll.rejected]: (state, action) => {
            console.log('rejected');
        },

    }
});

const {reducer: carReducer, actions: {}} = carSlice;

export default carReducer;
export const carActions = {
    getAll
};