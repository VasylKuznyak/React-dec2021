import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import postStyle from './Posts.module.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, [])

    return (
        <div className={postStyle.posts}>
            <div>{posts.map((post) => <Post key={post.id} post={post}/>)}</div>
            <Outlet/>
        </div>

    );
};

export {PostsPage};
