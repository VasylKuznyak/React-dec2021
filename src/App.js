import {Routes, Route} from "react-router-dom";

import './Global.module.css';
import {MainLayout} from "./Layouts";
import {PostsPage, UserPage, UserPost, UsersPage} from "./routes";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserPage/>}>
                        <Route path={':posts'} element={<UserPost/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>

                </Route>
            </Route>
        </Routes>
    );
}

export default App;
