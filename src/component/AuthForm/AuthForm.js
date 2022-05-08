import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {userService} from "../../services";
import {authActions} from "../../redux";

const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname, state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true);
    }, [pathname])

    const submit = async (user) => {
        try {
            if (!isLogin) {
                await userService.create(user);
                navigate('/login');
            } else {
                await dispatch(authActions.loginThunk({user}));
                navigate(state.pathname, {replace: true});
            }
        } catch (e) {

        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>{isLogin ? 'Login' : 'Register'}</button>
            <div>

            </div>
        </form>
    );
};

export {AuthForm};
