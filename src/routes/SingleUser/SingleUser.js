import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUser = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            userService.getById(id).then(({data}) => setUser(data));
        } else {
            setUser(state);
        }
    }, [id, state]);

    return (
        <div>
            {user && <UserDetails key={user.id} user={user}/>}
        </div>
    );
};

export {SingleUser};
