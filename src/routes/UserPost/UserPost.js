import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../../services";
import {UsersPosts} from "../../components";

const UserPost = () => {
    const {posts} = useParams();
    const {state} = useLocation();
    const [userPosts, setUserPosts] = useState(state);

    useEffect(() => {
        if (!state) {
            postsService.getById(posts).then(({data}) => setUserPosts(data));
        } else {
            setUserPosts(state);
        }
    }, [posts, state])

    return (
        <div>
            {userPosts && <UsersPosts key={userPosts.id} userPosts={userPosts}/>}
        </div>
    );
};

export {UserPost};
