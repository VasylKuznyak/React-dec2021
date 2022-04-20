import {useReducer} from "react";

const Counter = () => {
    const initialState = (init) => {
        return {
            count1: init,
            count2: init,
            count3: init,
        }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc':
                return {...state, count1: state.count1 + 1};
            case 'dec':
                return {...state, count1: state.count1 - 1};
            case 'res':
                return {...state, count1: 0};

            case 'inc2':
                return {...state, count2: state.count2 + 1};
            case 'dec2':
                return {...state, count2: state.count2 - 1};
            case 'res2':
                return {...state, count2: 0};

            case 'inc3':
                return {...state, count3: state.count3 + 1};
            case 'dec3':
            return {...state, count3: state.count3 - 1};
            case 'res3':
                return {...state, count3: 0};

            default:
                console.error('Невідповідний тип');
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, initialState);

    return (
        <div>
            <div>
                <h1>FIRST COUNT: {state.count1}</h1>
                <button onClick={() => dispatch({type: 'inc'})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'dec'})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'res'})}>RESET</button>
            </div>

            <div>
                <h1>SECOND COUNT: {state.count2}</h1>
                <button onClick={() => dispatch({type: 'inc2'})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'res2'})}>RESET</button>
            </div>

            <div>
                <h1>THIRD COUNT: {state.count3}</h1>
                <button onClick={() => dispatch({type: 'inc3'})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'res3'})}>RESET</button>
            </div>
        </div>
    );
};

export {Counter};

