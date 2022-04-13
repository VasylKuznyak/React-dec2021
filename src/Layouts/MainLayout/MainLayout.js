import {NavLink, Outlet} from "react-router-dom";

import style from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <div className={style.nav}>
                <NavLink to={"/home"}>HOME</NavLink>
                <NavLink to={"/posts"}>POSTS</NavLink>
                <NavLink to={"/users"}>USERS</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
