import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import style from './UsersPage.module.css';
import {usersService} from "../../services";
import {User} from "../../components";

const UsersPage = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setAllUsers(data));
    }, [])

    return (
        <div className={style.users}>
            <div>
                {allUsers.map((user) => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
