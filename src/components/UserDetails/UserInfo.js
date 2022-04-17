import {Link} from "react-router-dom";

import style from './UserInfo.module.css';

const UserInfo = ({user}) => {
    const {name, username, email, phone} = user;

    return (
        <div className={style.details}>
            <Link to={'posts'}><h1>name: {name}</h1></Link>
            <h2>username: {username}</h2>
            <h4>email: {email}</h4>
            <h5>phone: {phone}</h5>
        </div>
    );
};

export {UserInfo};
