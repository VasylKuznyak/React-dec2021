import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";
import style from './Cars.module.css';

const Cars = () => {
    const {cars, status} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAllCars());
    }, [dispatch]);

    return (
        <>
            <div>{status && <h1>{status}</h1>}</div>
            <div className={style.allCars}>{cars.map((car) => <Car key={car.id} car={car}/>)}</div>
        </>
    );
};

export {Cars};
