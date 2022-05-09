import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car";
import {carActions} from "../../redux";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.carSliceThunk());
    }, [dispatch])

    return (
        <div>
            {cars.map((car) => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
