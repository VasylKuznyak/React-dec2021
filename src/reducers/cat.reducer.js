import {useReducer} from "react";

import {ADD, DELETE} from "./actions";

const initialState = (initial) => {
    return {
        cats: initial,
        dogs: initial
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            const cat = action.payload.cat;
            const [lastCat] = state.cats.slice(-1);
            const id = lastCat ? lastCat.id + 1 : 0;
            return {...state, cats: [...state.cats, {id, name: cat}]}

        case DELETE:
            const catId = action.payload.id;
            const index = state.cats.findIndex((cat) => cat.id === catId);
            state.cats.splice(index, 1);
            return {...state, cats: [...state.cats]};

        default:
            console.error('Невідоповідний тип')
            return state;
    }
}

export const useAnimalReducer = () => useReducer(reducer, [], initialState);
