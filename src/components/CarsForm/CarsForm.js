import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";
import style from './CarsForm.module.css';

const CarsForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {carToUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carToUpdate) {
            const {model, year, price} = carToUpdate;
            setValue('model', model);
            setValue('year', year);
            setValue('price', price);
        }
    }, [setValue, carToUpdate]);

    const onSubmit = async (car) => {
        if (carToUpdate) {
            await dispatch(carActions.updateCar({id: carToUpdate.id, car}));
        } else {
            await dispatch(carActions.postCar({car}));
        }
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div><input type="text" {...register('model')} placeholder={'model'}/></div>
                <div><input type="text" {...register('year')} placeholder={'year'}/></div>
                <div><input type="text" {...register('price')} placeholder={'price'}/></div>
                <button>{carToUpdate ? 'UPDATE CAR' : 'CREATE CAR'}</button>
            </form>
        </div>
    );
};

export {CarsForm};
