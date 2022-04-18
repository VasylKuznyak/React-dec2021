import style from '../PostDetails/PostDetails.module.css';

const PostsOfUser = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div className={style.postDetails}>
           <div>user ID: {userId}</div>
           <div>{id}. {title}</div>
           <div>{body}</div>
        </div>
    );
};

export {PostsOfUser};
