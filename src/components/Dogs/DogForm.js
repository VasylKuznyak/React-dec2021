import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {dogActions} from "../../redux";

const DogForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const {dogForUpdate} = useSelector(state => state.dogs);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (dogForUpdate) {
            dispatch(dogActions.updatedDog({id: dogForUpdate.id, dog: data}))
        } else {
            const dogName = data.dogName;
            dogName && dispatch(dogActions.addDog({dog: dogName}));
            reset();
        }
    }

    useEffect(() => {
        if (dogForUpdate) {
            setValue('dogName', dogForUpdate.name);
        }
    }, [setValue, dogForUpdate])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('dogName')} placeholder={'dog name'}/>
            <button>SEND</button>
        </form>
    );
};

export {DogForm};
