import css from './UserDetails.module.css';

const UserDetails = ({user, idForPost}) => {
    const {id, username, email, phone, address: {street, city}} = user;
    return (
        <div className={css.details}>
            <div>
                <h3><i>username: </i> {username}</h3>
                <h3><i>email: </i> {email}</h3>
                <h3><i>city: </i> {city}, <i>street: </i> {street}</h3>
                <h3><i>phone: </i> {phone}</h3>
                <button onClick={() => idForPost(id)}>To Posts</button>
            </div>
        </div>
    );
};

export {UserDetails};
