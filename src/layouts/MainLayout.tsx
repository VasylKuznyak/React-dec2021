import {FC} from "react";
import {Outlet} from "react-router-dom";

import {CarForm} from "../components";

const MainLayout: FC = () => {
    return (
        <>
            <CarForm/>
            <Outlet/>
        </>
    );
};

export {MainLayout};
