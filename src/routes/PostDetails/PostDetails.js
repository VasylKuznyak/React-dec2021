import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postsService} from "../../services";
import {useLocation, useParams} from "react-router-dom";
import {PostInfo} from "../../components";

const PostDetails = () => {
    const {postId} = useParams();
    const {state} = useLocation();
    const [postDetails, setPostDetails] = useState(state);

    useEffect(() => {
        if (!state) {
            postsService.getById(postId).then(({data}) => setPostDetails(data));
        } else {
            setPostDetails(state);
        }
    }, [state, postId]);

    return (
        <div>
            {postDetails && <PostInfo post={postDetails}/>}
            <Outlet/>
        </div>
    );
};

export {PostDetails};
