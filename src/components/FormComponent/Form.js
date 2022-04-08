import {useEffect, useState} from "react";

import {userService} from "../../services";

const Form = ({setIdForm}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, [])

    const handleChange = (event) => {
        setIdForm(event.target.value)
    }

    return (
        <form>
            <select onChange={(e) => handleChange(e)}>
                {
                    users.map((user) =>
                        <option value={user.id} key={user.id}>{user.name}</option>)
                }
            </select>
        </form>
    );
};

export {Form};


