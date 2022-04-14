import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../../services";
import {PostDetails} from "../../../components";

const PostPage = () => {
    const {state} = useLocation();
    const {postId} = useParams();
    const [posts, setPosts] = useState(state);

    useEffect(() => {
        if (!state) {
            postsService.getById(postId).then(({data}) => setPosts(data));
        } else {
            setPosts(state);
        }
    }, [state, postId])

    return (
        <div>
            <div>{posts && <PostDetails key={posts.key} post={posts}/>}</div>
            <Outlet/>
        </div>
    );
};

export {PostPage};
