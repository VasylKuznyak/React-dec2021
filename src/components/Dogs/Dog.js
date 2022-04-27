import {useDispatch} from "react-redux";

import {dogActions} from "../../redux";
import style from '../../App.module.css';

const Dog = ({dog}) => {
    const {id, name} = dog;

    const dispatch = useDispatch();

    const deleteDog = () => {
        dispatch(dogActions.deleteDog({id}));
    }

    const updateDog = () => {
        dispatch(dogActions.updateDog({dog}));
    }

    return (
        <div className={style.block}>
            <h3>{id}. {name}</h3>
            <button onClick={deleteDog}>DELETE</button>
            <button onClick={updateDog}>UPDATE</button>
        </div>
    );
};

export {Dog};
