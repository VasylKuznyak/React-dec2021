import {useEffect, useState} from "react";

import {Form, PostsComponent} from "./components";
import {postService} from "./services/post.service";

const App = () => {
    const [idForm, setIdForm] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getOne(idForm).then(({data}) => setPosts(data))
    }, [idForm])

    return (
        <div>
            <Form setIdForm={setIdForm}/>
            {posts ?
                posts.map((post) => <PostsComponent key={post.id} post={post}/>)
                : 'This user has no posts'}
        </div>
    );
};

export default App;