import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(carActions.getAll({car: data}))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><input type="text" {...register('model')} placeholder={'model'}/></div>
            <div><input type="text" {...register('price')} placeholder={'price'}/></div>
            <div><input type="text" {...register('year')} placeholder={'year'}/></div>
            <button>SUBMIT</button>
        </form>
    );
};

export {CarForm};
