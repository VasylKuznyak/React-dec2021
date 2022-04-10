import style from './Character.module.css';

const Character = ({character: {name, imageUrl}}) => {
    return (
        <div className={style.character}>
            <h3>{name}</h3>
            <img src={imageUrl} alt={name}/>
        </div>
    );
};

export {Character};
