import style from './PostsOfUser.module.css';

const PostsOfUser = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div className={style.posts}>
           <div>user ID: {userId}</div>
           <div>{id}. {title}</div>
           <div>{body}</div>
        </div>
    );
};

export {PostsOfUser};
