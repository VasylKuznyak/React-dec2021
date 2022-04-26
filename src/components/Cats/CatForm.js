import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {catActions} from "../../redux";

const CatForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const catName = data.catName
        catName && dispatch(catActions.addCat({name: catName}))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('catName')} placeholder={'cat name'}/>
            <button>SEND</button>
        </form>
    );
};

export {CatForm};
