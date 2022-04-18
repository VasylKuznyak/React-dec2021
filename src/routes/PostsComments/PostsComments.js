import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {CommentsOfPost} from "../../components";

const PostsComments = () => {
    const {postId} = useParams();
    const [postComments, setPostComments] = useState(null);

    useEffect(() => {
        postsService.getCommentsById(postId).then(({data}) => setPostComments(data));
    }, [postId])
    console.log(postComments)

    return (
        <div>
            {postComments &&
                postComments.map((comments) => <CommentsOfPost key={comments.id} comments={comments}/>)}
        </div>
    );
};

export {PostsComments};
