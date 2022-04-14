import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {UserDetails} from "../../components/UserDetails/UserDetails";

const UserPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [userDetails, setUserDetails] = useState(state);

    useEffect(() => {
        if (!state) {
            usersService.getById(id).then(({data}) => setUserDetails(data));
        } else {
            setUserDetails(state);
        }
    }, [id, state]);

    return (
        <div>
            {userDetails && <div><UserDetails key={userDetails.id} user={userDetails}/></div>}
            <Outlet/>
        </div>
    );
};

export {UserPage};
