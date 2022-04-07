import {useState} from "react";

import './App.css';
import {UserPosts, Users} from "./components";
import {postService} from "./services/post.service";

const App = () => {
    const [posts, setPosts] = useState([]);

    const idForPost = async (id) => {
        const {data} = await postService.getAll(id);
        setPosts(data)
    }

    return (
        <div>
            <Users idForPost={idForPost}/>
            {posts.map(post => <UserPosts key={post.id} posts={post}/>)}
        </div>
    );
};

export default App;