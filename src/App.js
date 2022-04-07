import {useEffect, useState} from "react";
import {userService} from "./services";
import {postService} from "./services/post.service";

const App = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    useEffect((id) => {
        postService.getOne(id).then(({data}) => setPosts(data))
        const filteredPosts = posts.filter(post => users.id === posts.userId);
    }, [])


    // const getUserId = async (id) => {
    //     const {data} = await userService.getOne(id)
    //     setUserDetails(data)
    // }

    return (
        <div>
            <form onSelect={onSelect}>
                <select>
                    {users.map((user) => <option value={user.id} key={user.id}>{user.name}</option>)}
                </select>
            </form>
        </div>
    );
};

export default App;