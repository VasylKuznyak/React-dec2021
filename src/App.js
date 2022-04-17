import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {HomePage, PostsPage, UserDetails, UserPosts, UsersPage} from "./routes";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':userId'} element={<UserDetails/>}>
                        <Route path={'posts'} element={<UserPosts/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}/>
            </Route>

        </Routes>
    );
};

export default App;