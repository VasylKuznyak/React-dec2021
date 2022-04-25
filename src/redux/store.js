import {combineReducers, configureStore} from "@reduxjs/toolkit";

import catReducer from "./slices/cats.slice";
import dogReducer from "./slices/dogs.slice";

const rootReducer = combineReducers({
    cats: catReducer,
    dogs: dogReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;