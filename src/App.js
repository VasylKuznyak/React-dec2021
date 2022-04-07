import {useState} from "react";

import './App.css';
import {Posts, Users} from "./components";
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
            {onePost && <Posts onePost={onePost}/>}
        </div>
    );
};

export default App;