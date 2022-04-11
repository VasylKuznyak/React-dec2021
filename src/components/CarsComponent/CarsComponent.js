import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {CarComponent} from "../CarComponent/CarComponent";

const CarsComponent = ({newCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    return (
        <div>
            {cars.map((car) => <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export {CarsComponent};
