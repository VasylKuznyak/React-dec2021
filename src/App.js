import {Dogs, DogForm, Cats, CatForm} from "./components";

import style from './App.module.css';

function App() {
    return (
        <div className={style.center}>
            <div>
                <CatForm/>
                <Cats/>
            </div>

            <div>
                <DogForm/>
                <Dogs/>
            </div>
        </div>
    );
}

export default App;
