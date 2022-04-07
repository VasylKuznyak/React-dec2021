import {useState} from "react";

import './App.css';
import {UserPost, Users} from "./components";
import {postService} from "./services/post.service";

const App = () => {
    const [onePost, setOnePost] = useState(null);

    const idForPost = async (id) => {
        const {data} = await postService.getOne(id);
        setOnePost(data)
    }

    return (
        <div>
            <Users idForPost={idForPost}/>
            {onePost && <UserPost onePost={onePost}/>}
        </div>
    );
};

export default App;