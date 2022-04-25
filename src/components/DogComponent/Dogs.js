import {useDispatch, useSelector} from "react-redux";

import {dogsActions} from "../../redux";
import {Dog} from "./Dog";

const Dogs = () => {
    const {dogs} = useSelector(state => state.dogs);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        const dogName = event.target.dog.value;
        dispatch(dogsActions.add({dogName}));
        event.target.dog.value = '';
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder={'Dog name'} name={'dog'}/>
                <button>SEND</button>
            </form>

            {dogs.map((dog) => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};
