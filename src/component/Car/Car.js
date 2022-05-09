const Car = ({car: {id, model, price, year}}) => {
    return (
        <>
            <h1>bylfa</h1>
            <div>{id}. {model}</div>
            <div>{price}</div>
            <div>{year}</div>
        </>
    );
};

export {Car};
