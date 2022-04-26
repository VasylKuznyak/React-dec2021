import {useDispatch} from "react-redux";

import {dogActions} from "../redux";

const Dog = ({dog}) => {
    const dispatch = useDispatch();

    const {id, name} = dog;

    const deleteDog = () => {
        dispatch(dogActions.deleteDog({id}));
    }

    const updateDog = () => {

    }

    return (
        <div>
            <h3>{id}. {name}</h3>
            <button onClick={deleteDog}>DELETE</button>
            <button onClick={updateDog}>UPDATE</button>
        </div>
    );
};

export {Dog};
