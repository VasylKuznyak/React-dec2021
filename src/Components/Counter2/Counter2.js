import {useReducer} from "react";

const Counter2 = () => {
    const initialState = (initial) => {
        return {
            count1: initial,
            count2: initial,
            count3: initial,
        }
    }

    const reducer = (state, action) => {

        switch (action.type) {
            case 'count1':
                return {...state, count1: state.count1 + action.payload}
            case 'count2':
                return {...state, count2: state.count2 + action.payload}
            case 'count3':
                return {...state, count3: state.count3 + action.payload}

            case 'reset':
                return {...state, ['count' + action.payload]: 0}

            default:
                console.log('невірний тип')
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, initialState);

    return (
        <div>

            <hr/>
            <hr/>

            <div>
                <h1>COUNTER1: {state.count1}</h1>
                <button onClick={() => dispatch({type: 'count1', payload: 1})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'count1', payload: -1})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'reset', payload: 1})}>RESET</button>
            </div>

            <div>
                <h1>COUNTER2: {state.count2}</h1>
                <button onClick={() => dispatch({type: 'count2', payload: 1})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'count2', payload: -1})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'reset', payload: 2})}>RESET</button>
            </div>

            <div>
                <h1>COUNTER3: {state.count3}</h1>
                <button onClick={() => dispatch({type: 'count3', payload: 1})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'count3', payload: -1})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'reset', payload: 3})}>RESET</button>
            </div>
        </div>
    );
};

export {Counter2};