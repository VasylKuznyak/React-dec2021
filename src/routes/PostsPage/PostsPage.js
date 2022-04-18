import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postsService} from "../../services";
import {Posts} from "../../components";
import style from './PostsPage.module.css';

const PostsPage = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setAllPosts(data));
    }, [])

    return (
        <div className={style.flex}>
            <div className={style.allPosts}>
                {allPosts.map((post) => <Posts key={post.id} post={post}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};
