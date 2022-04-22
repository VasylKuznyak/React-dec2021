import {types} from "../redux";

const loadUsers = (payload, dispatch) => {
    dispatch({type: types.LOAD_USERS, payload})
}
const loadPosts = (payload, dispatch) => {
    dispatch({type: types.LOAD_POSTS, payload})
}

export {
    loadUsers,
    loadPosts
}