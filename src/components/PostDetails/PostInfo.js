import {Link} from "react-router-dom";

import style from './PostDetails.module.css';

const PostInfo = ({post}) => {
    const {id, title, body} = post;

    return (
        <div className={style.postDetails}>
            <div>{id}</div>
            <div><Link to={'comments'}>{title}</Link></div>
            <div>{body}</div>
        </div>
    );
};

export {PostInfo};
