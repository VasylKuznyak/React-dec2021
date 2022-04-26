import {useDispatch} from "react-redux";

import {dogActions} from "../../redux";
import style from '../../App.module.css';

const Dog = ({dog}) => {
    const dispatch = useDispatch();

    const {id, name} = dog;

    const deleteDog = () => {
        dispatch(dogActions.deleteDog({id}));
    }

    return (
        <div className={style.block}>
            <h3>{id}. {name}</h3>
            <button onClick={deleteDog}>DELETE</button>
        </div>
    );
};

export {Dog};
