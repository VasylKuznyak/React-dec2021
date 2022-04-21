import {useRef} from "react";

import {ADD, useAnimalReducer} from "../../reducers";
import {Cat} from "../Cat/Cat";

const CatCreator = () => {
    const catRef = useRef();
    const [state, dispatch] = useAnimalReducer();

    const createCat = () => {
        let newCat = catRef.current.value;
        dispatch({type: ADD, payload: {cat: newCat}})
        catRef.current.value = '';
    }

    return (
        <div>
            <input type="text"
                   placeholder={'Add cat name'}
                   ref={catRef}/>
            <button onClick={createCat}>ADD</button>

            {
                state.cats.map((cat) =>
                    <Cat key={cat.id}
                         cat={cat}
                         dispatch={dispatch}
                    />)
            }
        </div>
    );
};

export {CatCreator};
