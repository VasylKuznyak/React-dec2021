import {Link} from "react-router-dom";

import style from './Car.module.css';

const Car = ({car}) => {
    const {id, model} = car;

    return (
        <div className={style.carBlock}>
            <div><b>{model}</b></div>
            <Link to={id.toString()} state={car}>
                <button>DETAILS</button>
            </Link>
        </div>
    );
};

export {Car};
