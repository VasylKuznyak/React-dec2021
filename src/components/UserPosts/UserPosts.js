import css from './UserPost.module.css'

const UserPosts = ({posts: {title, body}}) => {
    return (
        <div className={css.userPost}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export {UserPosts};
