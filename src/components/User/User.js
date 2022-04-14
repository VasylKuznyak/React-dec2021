import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <Button to={id.toString()} state={user}>Details</Button> name: {name}
        </div>
    );
};

export {User};
