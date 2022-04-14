import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <Button to={id.toString()} state={post}>Details</Button> {id}. {title}
        </div>
    );
};

export {Post};
