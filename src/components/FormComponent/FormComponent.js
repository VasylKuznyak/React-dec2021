import {useForm} from "react-hook-form";

import {carsService} from "../../services";

const FormComponent = ({setNewCar}) => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = async (car) => {
        const {data} = await carsService.create(car);
        setNewCar(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Model:
                <input type="text" {...register('model')}/></label>
            <label>Price:
                <input type="number" {...register('price', {valueAsNumber: true})}/></label>
            <label>Year:
                <input type="number" {...register('year', {valueAsNumber: true})}/></label>
            <button>Submit</button>
        </form>
    );
};

export {FormComponent};
