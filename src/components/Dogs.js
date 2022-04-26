import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {dogActions} from "../redux";
import {Dog} from "./Dog";

const Dogs = () => {
    const {dogs} = useSelector(state => state.dogs);
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const dogName = data.dogName;
        dispatch(dogActions.addDog({dog: dogName}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('dogName')} placeholder={'dog name'}/>
                <button>SEND</button>
            </form>

            {dogs.map((dog) => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};
