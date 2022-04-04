import {useEffect, useState} from "react";

import {Post} from "../Post/Post";
import {postsService} from "../../services/posts.service";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => setPosts(value))
    }, [])

    return (
        <div className='posts'>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
