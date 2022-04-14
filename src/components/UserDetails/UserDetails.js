const UserDetails = ({user}) => {
    const {name, username, email, address: {street, city}} = user;
    return (
        <div>
            <h4>name: {name}</h4>
            <h4>username: {username}</h4>
            <h4>email: {email}</h4>
            <h4>street: {street}, city: {city}</h4>
        </div>
    );
};

export {UserDetails};
