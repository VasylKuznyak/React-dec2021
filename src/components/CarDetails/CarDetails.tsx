import {ICar} from "../../interfaces";
import {FC} from "react";

interface IProps {
    car: ICar
}

const CarDetails: FC<IProps> = ({car: {model, price, year}}) => {
    return (
        <>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button>Delete</button>
            <button>Update</button>
        </>
    );
};

export {CarDetails};
