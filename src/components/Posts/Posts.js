import {Link} from "react-router-dom";

import style from './Posts.module.css';

const Posts = ({post}) => {
    const {id, title} = post;

    return (
        <div className={style.posts}>
            <div>{id}. <Link to={id.toString()} state={post}>{title}</Link></div>
        </div>
    );
};

export {Posts};
