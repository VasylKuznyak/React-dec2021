import style from './Digimon.module.css';

const Digimon = ({digimon: {name, img}}) => {
    return (
        <div className={style.digimon}>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Digimon};
