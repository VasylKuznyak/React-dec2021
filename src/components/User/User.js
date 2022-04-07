import css from './User.module.css'

const User = ({user:{id, name}, getUserId}) => {
    return (
        <div className={css.user}>
            <h1>{name}</h1>
            <button onClick={()=>getUserId(id)}>More Details</button>
        </div>
    );
};

export {User};
