import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postsService} from "../../../services";
import {Posts} from "../../../components";
import style from './Posts.module.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data));
    }, [])

    return (
        <div className={style.posts}>
            <div>{posts.map((post) => <Posts key={post.id} post={post}/>)}</div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};
