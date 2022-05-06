import {ICar} from "../../interfaces";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../hook";
import {carActions} from "../../redux";
import style from './CarDetails.module.css';

interface IProps {
    car: ICar
}

const CarDetails: FC<IProps> = ({car}) => {
    const navigate = useNavigate();
    const {id, model, price, year} = car;

    const dispatch = useAppDispatch();

    const deleteById = async () => {
        await dispatch(carActions.deleteByIdThunk({id}));
        navigate('/cars');
    };

    const updateById = async () => {
        await dispatch(carActions.setToUpdate({car}));
        navigate('/cars');
    };

    return (
        <div className={style.carDetails}>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={deleteById}>Delete</button>
            <button onClick={updateById}>Update</button>
        </div>
    );
};

export {CarDetails};
