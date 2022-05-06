import {ICar} from "../../interfaces";
import {FC} from "react";

import {useAppDispatch} from "../../hook";
import {carActions} from "../../redux";

interface IProps {
    car: ICar
}

const CarDetails: FC<IProps> = ({car}) => {
    const {id, model, price, year} = car

    const dispatch = useAppDispatch();

    const deleteById = async () => {
        await dispatch(carActions.deleteByIdThunk({id}));
    };

    return (
        <>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={deleteById}>Delete</button>
            <button>Update</button>
        </>
    );
};

export {CarDetails};
