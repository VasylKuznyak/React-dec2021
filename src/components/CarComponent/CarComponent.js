const CarComponent = ({car: {model, year, price}}) => {
    return (
        <div>
            <h4>model: {model}</h4>
            <h4>year: {year}</h4>
            <h4>price: {price}</h4>
        </div>
    );
};

export {CarComponent};
