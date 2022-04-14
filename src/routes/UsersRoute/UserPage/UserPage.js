import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../../services";
import {UserDetails} from "../../../components";

const UserPage = () => {
    const {state} = useLocation();
    const {userId} = useParams();
    const [userDetails, setUserDetails] = useState(state);

    useEffect(() => {
        if (!state) {
            usersService.getById(userId).then(({data}) => setUserDetails(data));
        } else {
            setUserDetails(state);
        }
    }, [userId, state]);

    return (
        <div>
            <div>{userDetails && <UserDetails key={userDetails.id} user={userDetails}/>}</div>
            <Outlet/>
        </div>
    );
};

export {UserPage};
