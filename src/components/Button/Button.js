import {Link} from "react-router-dom";

import style from './Button.module.css';

const Button = ({to, state, children, ...rest}) => {
    return (
        <Link to={to} state={state}>
            <button{...rest} className={style.button}>{children}</button>
        </Link>
    );
};

export {Button};
