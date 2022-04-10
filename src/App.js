import {useState} from "react";

import {CharacterChosen, Characters} from "./components";
import style from './App.module.css';

const App = () => {
    const [chosenCharacter, setChosenCharacter] = useState(null);

    return (
        <div>
            <h1 className={style.title}>RICK AND MORTY CHARACTERS</h1>
            <div className={style.global}>
                {chosenCharacter && <CharacterChosen chosenCharacter={chosenCharacter}/>}
                <Characters setChosenCharacter={setChosenCharacter}/>
            </div>
        </div>
    );
};

export default App;