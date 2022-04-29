import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    carToUpdate: null,
};

const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll();
            return data;
        } catch (error) {
            return rejectWithValue({error: error.message});
        }
    }
);

const postCar = createAsyncThunk(
    'carSlice/postCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.postCar(car);
            return data;
        } catch (error) {
            return rejectWithValue({error: error.message});
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
            return {id};
        } catch (error) {
            return rejectWithValue({error: error.message})
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/carToUpdate',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carsService.updateById(id, car);
            return data;
        } catch (error) {
            return rejectWithValue({error: error.message});
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarToUpdate: (state, action) => {
            state.carToUpdate = action.payload.car;
        }
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(
                    getAllCars.fulfilled, (state, action) => {
                        state.cars = action.payload;
                        state.status = 'Завантажив машини';
                    }
                )
                .addCase(
                    getAllCars.rejected, (state, action) => {
                        state.status = action.payload.error;
                    }
                )
                .addCase(
                    postCar.fulfilled, (state, action) => {
                        state.status = 'Створив машину';
                        state.cars.push(action.payload);
                    }
                )
                .addCase(
                    postCar.rejected, (state, action) => {
                        state.status = action.payload.error;
                    }
                )
                .addCase(
                    deleteCar.fulfilled, (state, action) => {
                        const index = state.cars.findIndex((car) => car.id === action.payload.id);
                        state.cars.splice(index, 1);
                    }
                )
                .addCase(
                    deleteCar.rejected, (state, action) => {
                        state.status = action.payload.error;
                    }
                )
                .addCase(
                    updateCar.fulfilled, (state, action) => {
                        const index = state.cars.findIndex((car) => car.id === action.payload.id);
                        state.cars[index] = {...state.cars[index], ...action.payload};
                    }
                )
                .addCase(
                    updateCar.rejected, (state, action) => {
                        state.status = action.payload.error;
                    }
                )
        }
});

const {reducer: carReducer, actions: {setCarToUpdate}} = carSlice;

export default carReducer;
export const carActions = {
    getAllCars,
    postCar,
    deleteCar,
    setCarToUpdate,
    updateCar,
};
