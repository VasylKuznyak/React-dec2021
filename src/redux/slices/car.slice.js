import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
}

const carSliceThunk = createAsyncThunk(
    'carSlice/carSliceThunk',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(carSliceThunk.fulfilled, (state, action) => {
                state.cars = action.payload;
            });
    },
});

const {reducer: carReducer} = carSlice;

const carActions = {carSliceThunk};

export {
    carReducer,
    carActions,
};
