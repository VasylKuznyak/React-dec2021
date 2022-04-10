import style from './Character.module.css';

const Character = ({character, setChosenCharacter}) => {
    const {image, name, status} = character
    return (
        <div className={style.character} onClick={() => {
            setChosenCharacter(character);
            window.scrollTo(0, 0)
        }}>
            <h2>{name}</h2>
            <img src={image} alt={`character-${name}`}/>
            <h4>status: {status}</h4>
        </div>
    );
};

export {Character};
