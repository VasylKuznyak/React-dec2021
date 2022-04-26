import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {dogActions} from "../../redux";

const DogForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const dogName = data.dogName;
        dogName && dispatch(dogActions.addDog({dog: dogName}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('dogName')} placeholder={'dog name'}/>
            <button>SEND</button>
        </form>
    );
};

export {DogForm};
