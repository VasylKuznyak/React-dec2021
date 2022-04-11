import {Link} from "react-router-dom";

import style from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={style.menu}>
            <Link to={'/disney'}>
                <button>DISNEY</button>
            </Link>
            <Link to={'/digimon'}>
                <button>DIGIMON</button>
            </Link>
        </div>
    );
};

export {HomePage};
