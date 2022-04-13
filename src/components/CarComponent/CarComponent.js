import style from './Car.module.css';
import {carsService} from "../../services";

const CarComponent = ({car, setCarsAfterDelete, setUpdatedCar}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id);
        setCarsAfterDelete(id);
    }

    return (
        <div className={style.car}>
            <h4>id:{id}</h4>
            <h4>model: {model}</h4>
            <h4>price: {price}</h4>
            <h4>year: {year}</h4>
            <button onClick={() => deleteCar()}>Delete</button>
            <button onClick={() => setUpdatedCar(car)}>Update</button>
        </div>
    );
};

export {CarComponent};
