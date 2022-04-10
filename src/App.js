import {Routes, Route} from 'react-router-dom';

import {HomePage, CharactersPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/disney'} element={<CharactersPage/>}/>
            </Routes>
        </div>
    );
};

export default App;