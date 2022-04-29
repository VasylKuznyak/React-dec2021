import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {CarsDetails, CarsPage, NotFoundPage} from "./Routes";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={':carId'} element={<CarsDetails/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
