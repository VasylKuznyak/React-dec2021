import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hook";
import {carActions} from "../../redux";
import {Cars} from "../../components";

const CarsPage: FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAllThunk());
    }, [dispatch])

    return (
        <div>
            {cars.map((car) => <Cars key={car.id} car={car}/>)}
        </div>
    );
};

export {CarsPage};
