import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {carActions} from "../../redux";
import {useAppDispatch} from "../../hook";

const CarForm = () => {
    const {reset, register, handleSubmit} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.createCarThunk({car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
                   {...register('model')}
                   placeholder={'model'}/>
            <input type="number"
                   {...register('price', {valueAsNumber: true})}
                   placeholder={'price'}/>
            <input type="number"
                   {...register('year', {valueAsNumber: true})}
                   placeholder={'year'}/>
            <button>Create</button>
        </form>
    );
};

export {CarForm};
