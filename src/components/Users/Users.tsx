import {FC, useEffect, useState} from "react";

import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        (
            async () => await userService.getAll().then(({data}) => setUsers(data))
        )()
    }, [])

    return (
        <div>
            {users?.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
