import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {usersService} from "../../services";
import {Users} from "../../components";
import style from './Users.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, [])

    return (
        <div className={style.users}>
            <div>{users.map((user) => <Users key={user.id} user={user}/>)}</div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
