import {Routes, Route} from 'react-router-dom';

import {HomePage, CharactersPage, DigimonsPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/disney'} element={<CharactersPage/>}/>
                <Route path={'/digimon'} element={<DigimonsPage/>}/>
            </Routes>
        </div>
    );
};

export default App;