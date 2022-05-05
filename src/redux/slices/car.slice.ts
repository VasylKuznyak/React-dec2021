import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[];
}

const initialState: IState = {
    cars: [],
}

const getAllThunk = createAsyncThunk<ICar[], void>(
    'carSlice/getAllThunk',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(getAllThunk.fulfilled, (state, action) => {
                    state.cars = action.payload;
                })

        }
    }
);

const {reducer: carReducer} = carSlice;

const carActions = {getAllThunk,};

export {
    carReducer,
    carActions
};

