import {Characters} from "./components";
import style from './App.module.css';

const App = () => {
    return (
        <div className={style.global}>
            <Characters/>
        </div>
    );
};

export default App;