import style from './Character.module.css';

const Character = ({character}) => {
    const {image, name, status} = character
    return (
        <div className={style.character} onClick={()=>console.log('Зорянка Мавпа')}>
            <h2>{name}</h2>
            <img src={image} alt={`character-${name}`}/>
            <h4>status: {status}</h4>
        </div>
    );
};

export {Character};
