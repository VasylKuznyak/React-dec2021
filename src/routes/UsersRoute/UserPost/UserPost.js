import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {usersService} from "../../../services";
import {UsersPosts} from "../../../components";

const UserPost = () => {
    const {userId} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        usersService.getPostsById(userId).then(({data}) => setUserPosts(data));
    }, [userId])

    return (
        <div>
            {userPosts && userPosts.map((post) => <UsersPosts key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPost};
