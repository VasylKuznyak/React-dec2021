import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {catActions} from "../../redux";

const CatForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {catForUpdate} = useSelector(state => state.cats);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (catForUpdate) {
            dispatch(catActions.updatedCat({id: catForUpdate.id, cat: data}));
        } else {
            const catName = data.catName;
            catName && dispatch(catActions.addCat({name: catName}))
            reset();
        }
    }

    useEffect(() => {
        if (catForUpdate) {
            setValue('catName', catForUpdate.name);
        }
    }, [setValue, catForUpdate])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('catName')} placeholder={'cat name'}/>
            <button>{catForUpdate ? "UPDATE" : "ADD"}</button>
        </form>
    );
};

export {CatForm};
