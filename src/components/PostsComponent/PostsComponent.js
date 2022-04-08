import {useEffect, useState} from "react";

import {postService} from "../../services";
import {PostComponent} from "../PostComponent/PostComponent";

const PostsComponent = ({idForm}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getOne(idForm).then(({data}) => setPosts(data))
    }, [idForm])

    return (
        <div>
            {posts && posts.map((post) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};
