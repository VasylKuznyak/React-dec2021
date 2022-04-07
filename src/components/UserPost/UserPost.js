import css from './UserPost.module.css'

const UserPost = ({onePost: {title, body}}) => {
    return (
        <div className={css.userPost}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export {UserPost};
