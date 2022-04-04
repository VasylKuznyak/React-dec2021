const Post = ({post: {title, body}}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export {Post};
