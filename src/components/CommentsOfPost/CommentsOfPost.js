import style from '../PostDetails/PostDetails.module.css'

const CommentsOfPost = ({comments}) => {
    const {postId, name, email, body} = comments;

    return (
        <div className={style.postDetails}>
            <div>{postId}.{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export {CommentsOfPost};
