import {useDispatch} from "react-redux";

import style from './Car.module.css';
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    const deleteById = async () => {
        await dispatch(carActions.deleteCar({id}));
    };

    const updateCar = () => {
        dispatch(carActions.setCarToUpdate({car}));
    }

    return (
        <div className={style.carBlock}>
            <div><b>{model}</b></div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={deleteById}>DELETE</button>
            <button onClick={updateCar}>UPDATE</button>
            <button onClick={updateCar}>DETAILS</button>
        </div>
    );
};

export {Car};
