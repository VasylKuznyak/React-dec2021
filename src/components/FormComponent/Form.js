import {useEffect, useState} from "react";

import {userService} from "../../services";

const Form = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, [])


    function onSelect(event) {
        event.preventDefault();
        console.log(event.target.value);
    }

    return (
        <div>
            <form>
                <select onSelect={onSelect}>
                    {users.map((user) => <option value={user.id} key={user.id}>{user.name}</option>)}
                </select>
            </form>
        </div>
    );
};

export {Form};
