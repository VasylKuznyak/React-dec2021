import style from './Posts.module.css';
import {Button} from "../../Button/Button";

const Posts = ({post}) => {
    const {id, title} = post;

    return (
        <div className={style.posts}>
            <Button to={id.toString()} state={post}>DETAILS</Button>
            <div>{id}. {title}</div>
        </div>
    );
};

export {Posts};
