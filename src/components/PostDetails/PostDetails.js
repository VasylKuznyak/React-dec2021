import style from './Post.module.css';

const PostDetails = ({post: {id, title, body}}) => {
    return (
        <div className={style.post}>
            <p>{id}. title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {PostDetails};
