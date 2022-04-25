import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user.slice";

const User = ({user}) => {
    const dispatch = useDispatch();

    const deleteById = () => {
        dispatch(userActions.deleteById(user.id))
    }

    return (
        <div>
            {user.id}. {user.name}
            <button onClick={deleteById}>DELETE</button>
        </div>
    );
};

export {User};
