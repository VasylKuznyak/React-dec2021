import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../../services";
import {PostsComments} from "../../../components";

const PostComments = () => {
    const {postId} = useParams();
    const [postComments, setPostComments] = useState(null);

    useEffect(() => {
        postsService.getCommentsById(postId).then(({data}) => setPostComments(data));
    }, [postId])

    return (
        <div>
            {postComments &&
                postComments.map((comment) => <PostsComments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostComments};
