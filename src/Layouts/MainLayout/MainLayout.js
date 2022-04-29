import {Outlet} from "react-router-dom";

import {CarsForm} from "../../components";

const MainLayout = () => {
    return (
        <>
            <CarsForm/>
            <Outlet/>
        </>
    );
};

export {MainLayout};
