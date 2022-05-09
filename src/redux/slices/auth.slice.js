import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../../services";

const initialState = {
    isAuth: null,
    loginError: null
};

const loginThunk = createAsyncThunk(
    'authSlice/loginThunk',
    async ({user}) => {
        const {data} = await authService.getTokens(user);
        return data;
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuth = true;
        },
        setError: (state) => {
            state.loginError = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isAuth = true;
                state.loginError = false;
                const {access, refresh} = action.payload;
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);
            })
            .addCase(loginThunk.rejected, (state) => {
                state.loginError = true;
            })
    }
})

const {reducer: authReducer, actions: {setAuth, setError}} = authSlice;

const authActions = {loginThunk, setAuth, setError};

export {
    authActions,
    authReducer,
};

