import {AuthForm} from "../../component";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const LoginPage = () => {
    const [query] = useSearchParams();
    localStorage.clear();

    useEffect(() => {
        console.log('SESSION END', !!query.get('expSession'))
    }, [query])

    return (
        <div>
            <AuthForm/>
            <Link to={'/register'}>Register</Link>
        </div>
    );
};

export {LoginPage};
