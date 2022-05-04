import {FC, useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";
import {IPost} from "../../interfaces";

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>();

    useEffect(() => {
        const getAllPosts = async () => {
            const {data} = await postService.getAll();
            setPosts(data);
        }
        getAllPosts();
    }, [])

    return (
        <div>
            {posts?.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
