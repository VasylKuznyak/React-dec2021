import {useForm} from "react-hook-form";

import {carsService} from "../../services";
import style from './Form.module.css';

const FormComponent = ({setCreatedCar}) => {
    const {reset, handleSubmit, register} = useForm();

    const OnSubmit = async (car) => {
        const {data} = await carsService.postCar(car);
        setCreatedCar(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className={style.form}>
            <label>
                Model: <input type="text" {...register('model')}/>
            </label>

            <label>
                Price: <input type="text" {...register('price', {valueAsNumber: true})}/>
            </label>

            <label>
                Year: <input type="text" {...register('year', {valueAsNumber: true})}/>
            </label>

            <button>Send</button>
        </form>
    );
}

export {FormComponent};
