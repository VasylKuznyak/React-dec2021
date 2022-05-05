import {FC} from "react";
import {Link} from "react-router-dom";

import {ICar} from "../../interfaces";

interface IProps {
    car: ICar
}

const Cars: FC<IProps> = ({car, car: {id, model}}) => {

    return (
        <>
            <div>{model}</div>
            <Link to={id.toString()} state={car}>
                <button>Details</button>
            </Link>
        </>
    );
};

export {Cars};
