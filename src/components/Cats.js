import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {catActions} from "../redux";
import {Cat} from "./Cat";

const Cats = () => {
    const {reset, register, handleSubmit} = useForm();
    const {cats} = useSelector(state => state.cats);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const catName = data.catName
        dispatch(catActions.addCat({name: catName}))
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('catName')} placeholder={'cat name'}/>
                <button>SEND</button>
            </form>

            {cats.map((cat) => <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export {Cats};
