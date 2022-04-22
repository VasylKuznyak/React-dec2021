import {combineReducers, createStore} from "redux";

import {userReducer} from "./user.reducer";
import {postReducer} from "./post.reducer";

const reducers = combineReducers({usersState: userReducer, postsState: postReducer});

export const store = createStore(reducers);