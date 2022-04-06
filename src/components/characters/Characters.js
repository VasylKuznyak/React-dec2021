import {useEffect, useState} from "react";

import {starWarsService} from "../../services/star_wars.service";
import {Character} from "../character/Character";
import './Characters.css';

const Characters = () => {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        starWarsService.getAll().then(value => setCharacters(value))
    }, [])

    return (
        <div className={'characters'}>
            {
                characters && (characters.results).map(result => <Character key={result.name} person={result}/>)
            }
        </div>
    );
};

export {Characters};
