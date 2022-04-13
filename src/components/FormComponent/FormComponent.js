import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../../services";
import {carValidator} from "../validators";
import style from './Form.module.css';

const FormComponent = ({setCreatedCar, updatedCar}) => {
    const [formError, setFormError] = useState({});

    const {
        reset,
        handleSubmit,
        register,
        setValue,
        formState: {errors}
    } = useForm({resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (updatedCar) {
            setValue('model', updatedCar.model);
            setValue('price', updatedCar.price);
            setValue('year', updatedCar.year);
        }
    }, [setValue, updatedCar])

    const OnSubmit = async (car) => {
        try {
            const {data} = await carsService.postCar(car);
            setCreatedCar(data);
            reset();
        } catch (error) {
            setFormError(error.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className={style.form}>
            <label>
                Model: <input type="text" {...register('model')}/>
            </label>
            {formError.model && <span>{formError.model[0]}</span>}
            {errors.model && <span>{errors.model.message}</span>}

            <label>
                Price: <input type="text" {...register('price', {valueAsNumber: true})}/>
            </label>
            {formError.price && <span>{formError.price[0]}</span>}
            {errors.price && <span>{errors.price.message}</span>}

            <label>
                Year: <input type="text" {...register('year', {valueAsNumber: true})}/>
            </label>
            {formError.year && <span>{formError.year[0]}</span>}
            {errors.year && <span>{errors.year.message}</span>}

            <button>Send</button>
        </form>
    );
}

export {FormComponent};
