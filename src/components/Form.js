import {useRef} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user.slice";

const Form = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();

    const addUser = () => {
        const user = nameInput.current.value;
        user && dispatch(userActions.add({user}))
        nameInput.current.value = ''
    }

    return (
        <>
            <input type="text" ref={nameInput} placeholder={'name'}/>
            <button onClick={addUser}>SEND</button>
        </>
    );
};

export {Form};
