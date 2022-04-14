import {Routes, Route} from "react-router-dom";

import './Global.module.css';
import {MainLayout} from "./Layouts";
import {PostsPage, UserPage, UserPost, PostPage, UsersPage, PostComments} from "./routes";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':userId'} element={<UserPage/>}>
                        <Route path={'posts'} element={<UserPost/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':postId'} element={<PostPage/>}>
                        <Route path={'comments'} element={<PostComments/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
