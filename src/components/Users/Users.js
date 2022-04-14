import style from './Users.module.css';
import {Button} from "../Button/Button";

const Users = ({user}) => {
    const {id, name} = user;

    return (
        <div className={style.users}>
            <Button to={id.toString()} state={user}>DETAILS</Button>
            {id}. {name}
        </div>
    );
};

export {Users};
