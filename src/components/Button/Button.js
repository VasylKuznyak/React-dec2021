import {Link} from "react-router-dom";

const Button = ({to, state, children, ...rest}) => {
    return (
        <Link to={to} state={state}>
            <button {...rest}>{children}</button>
        </Link>

    );
};

export {Button};
