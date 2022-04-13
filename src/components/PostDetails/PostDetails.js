const PostDetails = ({post: {id, title, body}}) => {
    return (
        <div>
            <p>{id}. title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {PostDetails};
