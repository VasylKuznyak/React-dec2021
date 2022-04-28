const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button>DELETE</button>
        </>
    );
};

export {Car};
