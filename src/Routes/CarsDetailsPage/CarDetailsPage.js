import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {CarDetails} from "../../components";
import {carsService} from "../../services";

const CarDetailsPage = () => {
    const {carId} = useParams();
    const {state} = useLocation();
    const [detailsAboutCar, setDetailsAboutCar] = useState(null);

    useEffect(() => {
        if (state) {
            setDetailsAboutCar(state);
        } else {
            carsService.getById(carId).then(({data}) => setDetailsAboutCar(data));
        }
    }, [state, carId])

    return (
        <div>
            {detailsAboutCar && <CarDetails car={detailsAboutCar}/>}
        </div>
    );
};

export {CarDetailsPage};
