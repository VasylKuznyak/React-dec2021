import {useEffect, useState} from "react";

import {Digimon} from "../../components";
import style from './Digimons.module.css';

const DigimonsPage = () => {
    const [digimons, setDigimons] = useState([]);

    useEffect(() => {
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then(value => value.json())
            .then(value => setDigimons(value))
    }, [])

    return (
        <div className={style.digimons}>
            {digimons.map((digimon) => <Digimon key={digimon.name} digimon={digimon}/>)}
        </div>
    );
};

export {DigimonsPage};
