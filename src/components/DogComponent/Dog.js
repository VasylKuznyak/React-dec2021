import {useDispatch} from "react-redux";

import {dogsActions} from "../../redux";

const Dog = ({dog: {id, name}}) => {
    const dispatch = useDispatch();

    const deleteById = () => {
        dispatch(dogsActions.deleteById({id}));
    }

    return (
        <div>
            <h3>{id}. {name}</h3>
            <button onClick={deleteById}>DELETE</button>
        </div>
    );
};

export {Dog};
