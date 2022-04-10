import {useEffect, useState} from "react";

import {characterService} from "../../services";
import {Character} from "../Character/Character";
import style from './Characters.module.css';

const Characters = ({setChosenCharacter}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getAll()
            .then(({data}) => setCharacters(data.results));
    }, [])

    return (
        <div>
            <div className={style.characters}>
                {
                    characters.map((character) =>
                        <Character key={character.id} setChosenCharacter={setChosenCharacter} character={character}/>)
                }
            </div>
        </div>
    );
};

export {Characters};
