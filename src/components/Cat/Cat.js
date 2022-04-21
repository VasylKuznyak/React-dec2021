import style from './Cat.module.css';
import {DELETE} from "../../reducers";

const Cat = ({cat: {name, id}, dispatch}) => {
    const deleteCat = () => {
        dispatch({type: DELETE, payload: id})
    }

    return (
        <div className={style.cat}>
            <button onClick={deleteCat}>DELETE</button>
            {name}
        </div>
    );
};

export {Cat};
