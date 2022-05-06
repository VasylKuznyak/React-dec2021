import {FC} from "react";
import {Link} from "react-router-dom";

import {ICar} from "../../interfaces";
import style from './Style.module.css'

interface IProps {
    car: ICar
}

const Cars: FC<IProps> = ({car, car: {id, model}}) => {

    return (
        <div className={style.singleCar}>
            <h3>{model}</h3>
            <Link to={id.toString()} state={car}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export {Cars};
