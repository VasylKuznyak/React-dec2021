import {FC} from "react";

import {IUser} from "../../interfaces";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {
    const {id, name, username, phone, email, address: {street, city}} = user;

    return (
        <div>
            <div>{id}. {name}</div>
            <div>{username}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{city}. {street}</div>
            <br/>
        </div>
    );
};

export {User};
