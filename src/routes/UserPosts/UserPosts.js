import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {PostsOfUser} from "../../components";

const UserPosts = () => {
    const [userPosts, setUsersPosts] = useState(null);
    const {userId} = useParams();

    useEffect(() => {
        usersService.getPostsById(userId).then(({data}) => setUsersPosts(data));
    }, [userId])

    return (
        <div>
            {userPosts && userPosts.map((post) => <PostsOfUser key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};
