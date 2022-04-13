import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {CarComponent} from "../CarComponent/CarComponent";
import style from './Cars.module.css';

const CarsComponent = ({createdCar}) => {
    const [allCars, setAllCars] = useState([]);
    const [carsAfterDelete, setCarsAfterDelete] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setAllCars(data));
    }, [])

    useEffect(() => {
        if (createdCar) {
            setAllCars(prevState => [...prevState, createdCar]);
        }
    }, [createdCar])

    useEffect(() => {
        if (carsAfterDelete) {
            setAllCars(prevState => prevState.filter((car) => car.id !== carsAfterDelete));
        }
    }, [carsAfterDelete])

    return (
        <div className={style.cars}>
            {allCars.map((car) =>
                <CarComponent car={car} key={car.id} setCarsAfterDelete={setCarsAfterDelete}/>)}
        </div>
    );
};

export {CarsComponent};
