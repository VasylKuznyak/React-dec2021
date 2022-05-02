import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import style from "../Car/Car.module.css";
import {carActions} from "../../redux";

const CarDetails = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteById = async () => {
        await dispatch(carActions.deleteCar({id}));
        navigate('/cars');
    };

    const updateCar = () => {
        dispatch(carActions.setCarToUpdate({car}));
        navigate('/cars');
    };

    return (
        <div className={style.carBlock}>
            <div><b>{model}</b></div>
            <div><b>{price}</b></div>
            <div><b>{year}</b></div>
            <button onClick={deleteById}>DELETE</button>
            <button onClick={updateCar}>UPDATE</button>
        </div>
    );
};

export {CarDetails};
