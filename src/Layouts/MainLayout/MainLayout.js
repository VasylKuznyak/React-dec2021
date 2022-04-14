import {NavLink, Outlet} from "react-router-dom";

import style from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={style.nav}>
                <NavLink to={'/users'}>USERS</NavLink>
                <NavLink to={'/posts'}>POSTS</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
