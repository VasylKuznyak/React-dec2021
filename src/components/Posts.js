import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {loadPosts} from "../redux";

const Posts = () => {
    const posts = useSelector(({postsState}) => postsState);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                loadPosts(posts, dispatch);
            });
    }, [dispatch])

    return (
        <div>
            <hr/>
            {posts.map((post) =>
                <div key={post.id}>
                    <div>{post.title}</div>
                </div>)}
        </div>
    );
};

export {Posts};
