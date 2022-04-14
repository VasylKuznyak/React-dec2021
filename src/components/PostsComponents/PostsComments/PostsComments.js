import style from './PostsComments.module.css';

const PostsComments = ({comment}) => {
    const {postId, name, email, body} = comment;

    return (
        <div className={style.comments}>
            <h5>postId: {postId}</h5>
            <h5>name: {name}</h5>
            <h5>email: {email}</h5>
            <h5>body: {body}</h5>
        </div>
    );
};

export {PostsComments};
