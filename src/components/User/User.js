import {Link} from "react-router-dom";

import style from './User.module.css';

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={style.user}>
            {id}. <Link to={id.toString()} state={user}>{name}</Link>
        </div>
    );
};

export {User};
