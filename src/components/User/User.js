const User = ({user: {name, username, email, address: {street, city}}}) => {
    return (
        <div>
            <h1>{name} ({username})</h1>
            <h2>{email}</h2>
            <h3>{street} {city}</h3>
        </div>
    );
};

export {User};
