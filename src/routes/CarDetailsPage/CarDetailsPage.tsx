import {FC, useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {carService} from "../../services";
import {ICar} from "../../interfaces";
import {CarDetails} from "../../components";

const CarDetailsPage: FC = () => {
    const [car, setCar] = useState<ICar | null>(null);
    const {state} = useLocation();
    const {carsId} = useParams<{ carsId: string }>();

    useEffect(() => {
        if (state) {
            setCar(state as ICar);
        } else {
            carService.getById(carsId as string).then(({data}) => setCar((data)));
        }
    }, [state, carsId])

    return (
        <>
            {car && <CarDetails car={car}/>}
        </>
    );
};

export {CarDetailsPage};
