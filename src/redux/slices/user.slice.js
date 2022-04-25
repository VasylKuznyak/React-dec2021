import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const userSlice = createSlice({
        name: 'userSlice',
        initialState,
        reducers: {
            add: (state, action) => {
                const {user} = action.payload;
                const [lastUser] = state.users.slice(-1);
                const id = lastUser ? lastUser.id + 1 : 1;
                const newUser = {id, name: user};
                state.users.push(newUser);
            },

            deleteById: (state, action) => {
                const index = state.users.findIndex((value) => value.id === action.payload.id);
                state.users.splice(index, 1);
            },
        }
    }
);

const {reducer: userReducer, actions: {add, deleteById}} = userSlice;
export default userReducer;
export const userActions = {
    add,
    deleteById
}
