import {Cats, Dogs} from "./components";
import style from './App.module.css';

function App() {
    return (
        <div className={style.center}>
            <Cats/>
            <Dogs/>
        </div>
    );
}

export default App;
