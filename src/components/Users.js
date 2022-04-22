import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {loadUsers} from "../redux";

const Users = () => {
    const users = useSelector(state => state.usersState);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                loadUsers(users, dispatch);
            });
    }, [dispatch])

    return (
        <div>
            {users.map((user) =>
                <div key={user.id}>
                    <div>{user.name}</div>
                </div>)}
            <hr/>
        </div>
    );
};

export {Users};
