import {useEffect, useState} from "react";

import {Comment} from "../Comment/Comment";
import {commentsService} from "../../services/comments.service";

const Comments = () => {
    const [comments, setComment] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComment(value))
    }, [])

    return (
        <div className='comments'>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};
