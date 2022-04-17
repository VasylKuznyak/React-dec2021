import {useEffect, useState} from "react";
import {useLocation, useParams, Outlet} from "react-router-dom";

import {usersService} from "../../services";
import {UserInfo} from "../../components";

const UserDetails = () => {
    const {state} = useLocation();
    const {userId} = useParams();
    const [userDetails, setUserDetails] = useState(state);

    useEffect(() => {
        if (!state) {
            usersService.getById(userId).then(({data}) => setUserDetails(data));
        } else {
            setUserDetails(state);
        }
    }, [state, userId])

    return (
        <div>
            {userDetails && <UserInfo user={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetails};
