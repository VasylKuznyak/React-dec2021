import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <h1>Header</h1>
            <Outlet/>
        </>
    );
};

export {MainLayout};
