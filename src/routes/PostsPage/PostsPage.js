import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, [])

    return (
        <div>
            <Outlet/>
            <div>{posts.map((post) => <Post key={post.id} post={post}/>)}</div>
        </div>

    );
};

export {PostsPage};
