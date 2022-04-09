import style from './CharacterChosen.module.css';

const CharacterChosen = ({chosenCharacter}) => {
    const {image, name, gender, origin, location, species} = chosenCharacter;
    return (
        <div className={style.chosenCharacter}>
            <img src={image} alt={`${name} image`}/>
            <h1>name: {name}</h1>
            <h2>gender: {gender}</h2>
            <h3>location: {location.name}</h3>
            <h3>origin: {origin.name}</h3>
            <h3>name: {name}</h3>
            <h3>species: {species}</h3>
        </div>
    );
};

export {CharacterChosen};