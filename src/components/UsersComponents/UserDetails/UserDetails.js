import style from './UserDetails.module.css';
import {Button} from "../../Button/Button";

const UserDetails = ({user}) => {
    const {name, username, email, address: {street, city}} = user;

    return (
        <div className={style.user}>
            <h2>name: {name}</h2>
            <h4>username: {username}</h4>
            <h4>email: {email}</h4>
            <div>Address:
                <h4>street: {street}</h4>
                <h4>city: {city}</h4>
            </div>
            <Button to={'posts'}>SHOW POSTS</Button>
        </div>
    );
};

export {UserDetails};
