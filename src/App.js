import {Routes, Route, Navigate} from "react-router-dom";

import {HomePage, NotFoundPage, PostsPage, SinglePost, SingleUser, UsersPage} from "./routes";
import {MainLayout} from "./Layouts/MainLayout/MainLayout";
import './Global.module.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePost/>}/>
                </Route>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUser/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
