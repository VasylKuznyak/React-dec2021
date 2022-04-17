import {Outlet} from "react-router-dom";

import {Button} from "../../components";
import style from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <div className={style.nav}>
                <Button to={'/home'}>HOME</Button>
                <Button to={'/users'}>USERS</Button>
                <Button to={'/posts'}>POSTS</Button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
