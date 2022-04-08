const PostComponent = ({post: {id, title}}) => {
    return (
        <div>
            <p>{id}. {title}</p>
        </div>
    );
};

export {PostComponent};
