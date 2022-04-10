import {useEffect, useState} from "react";

import {disneyService} from "../../services/disney.service";
import style from './Characters.module.css';
import {Character} from "../../components";

const CharactersPage = () => {
    const [characters, setCharacter] = useState([]);

    useEffect(() => {
        disneyService.getAll.then(({data: {data}}) => setCharacter(data))
    }, [])

    return (
        <div className={style.main}>
            {characters.map((character) => <Character key={character.url} character={character}/>)}
        </div>
    );
};

export {CharactersPage};

