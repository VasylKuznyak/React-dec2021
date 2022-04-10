import {Link} from "react-router-dom";

import style from './HomePage.module.css';

const HomePage = () => {

    return (
        <div className={style.menu}>
            <Link to={'/disney'}><button>GO TO DISNEY PAGE</button></Link>
        </div>
    );
};

export {HomePage};
