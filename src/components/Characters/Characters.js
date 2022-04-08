import {useEffect, useState} from "react";

import {characterService} from "../../services";
import {Character} from "../Character/Character";
import style from './Characters.module.css';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getAll().then(({data}) => setCharacters(data.results));
    }, [])

    return (
        <div>
            <h1 className={style.title}>RICK AND MORTY CHARACTERS</h1>
            <div className={style.characters}>
                {characters.map((character) => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};
