import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {CarDetailsPage, CarsPage, NotFoundPage} from "./Routes";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars/:carId'} element={<CarDetailsPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {App};
