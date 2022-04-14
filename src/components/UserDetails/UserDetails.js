import style from './UserDetails.module.css';
import {Button} from "../Button/Button";

const UserDetails = ({user}) => {
    const {id, name, username, email, address: {street, city}} = user;

    return (
        <div className={style.user}>
            <h2>name: {name}</h2>
            <h4>username: {username}</h4>
            <h4>email: {email}</h4>
            <div>Address:
                <h4>street: {street}</h4>
                <h4>city: {city}</h4>
            </div>
            <Button to={id.toString()} state={user}>Details</Button>
        </div>
    );
};

export {UserDetails};
