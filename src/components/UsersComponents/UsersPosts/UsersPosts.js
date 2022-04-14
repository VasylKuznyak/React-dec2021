import style from './Post.module.css';

const UsersPosts = ({post}) => {
    const {userId, title, body} = post;
    return (
        <div className={style.post}>
            <h4>{userId}. {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export {UsersPosts};
