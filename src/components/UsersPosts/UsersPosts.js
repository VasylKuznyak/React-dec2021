const UsersPosts = ({userPosts}) => {
    const {userId, title, body} = userPosts;
    return (
        <div>
            <h3>{userId}. {title}</h3>
            <h5>{body}</h5>
        </div>
    );
};

export {UsersPosts};
