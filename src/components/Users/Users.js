import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";
import css from './Users.module.css';

const Users = ({idForPost}) => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    const getUserId = async (id) => {
        const {data} = await userService.getOne(id)
        setUserDetails(data)
    }

    return (
        <div className={css.flex}>
            <div className={css.users}>
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
            </div>
            {userDetails && <UserDetails user={userDetails} idForPost={idForPost}/>}
        </div>
    );
};

export {Users};
