import {useReducer} from "react";
import '../Form/FormStyle.css';


const initialState = (initial) => {
    return {
        cats: initial,
        dogs: initial
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter((cat) => cat.id !== action.payload)}

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter((dog) => dog.id !== action.payload)}

        default:
            return state;
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, [], initialState);

    const onSubmitCat = (event) => {
        event.preventDefault();
        dispatch({type: 'addCat', payload: event.target[0].value})
    }

    const onSubmitDog = (event) => {
        event.preventDefault();
        dispatch({type: 'addCat', payload: event.target[0].value})
    }

    return (

        <div>
            <div className={'flex_style'}>
                    <form onSubmit={onSubmitCat}>
                        <input type="text" placeholder={'Add new cat'}/>
                        <button>Save</button>
                    </form>

                    <form onSubmit={onSubmitDog}>
                        <input type="text" placeholder={'Add new dog'}/>
                        <button>Save</button>
                    </form>
            </div>

            <div className={'flex_style'}>
                    {state.dogs.map((dog) =>
                        <div key={dog.id}>
                            <div>{dog.name}</div>
                            <button onClick={() => dispatch({type: 'deleteDog'})}>Delete</button>
                        </div>
                    )}

                    {state.cats.map((cat) =>
                    <div key={cat.id}>
                        <div>{cat.name}</div>
                        <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete</button>
                    </div>
                )}
            </div>
        </div>

    );
};

export {Form};
