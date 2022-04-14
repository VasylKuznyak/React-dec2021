import style from './PostDetails.module.css';
import {Button} from "../../Button/Button";

const PostDetails = ({post}) => {
    const {id, title, body} = post;

    return (
        <div className={style.details}>
            <h2>{id}. {title}</h2>
            <h5>{body}</h5>
            <Button to={'comments'}>SHOW COMMENTS</Button>
        </div>
    );
};

export {PostDetails};
