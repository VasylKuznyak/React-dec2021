import {useEffect, useState} from "react";

import {User} from "../User/User";
import {usersService} from "../../services/users.service";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className='users'>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
