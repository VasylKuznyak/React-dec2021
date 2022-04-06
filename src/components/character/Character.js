import './Character.css';

const Character = ({person}) => {
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender
    } = person;

    return (
            <div className={'character'}>
                <h1>{name}</h1>
                <h3>height: {height}</h3>
                <h4>mass: {mass}</h4>
                <h5>hair color: {hair_color}, skin color: {skin_color}, eye color: {eye_color}</h5>
                <h6>birth year: {birth_year}, gender: {gender}</h6>
                <button>Details about character</button>
            </div>
    );
};

export {Character};


