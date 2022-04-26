import {useDispatch} from "react-redux";
import {catActions} from "../redux";

const Cat = ({cat}) => {
    const {id, name} = cat;

    const dispatch = useDispatch();

    const deleteCat = () => {
        dispatch(catActions.deleteCat({id}));
    }

    const updateCat = () => {
        dispatch(catActions.updateCat({cat}))
    }

    return (
        <div>
            <h3>{id}. {name}</h3>
            <button onClick={deleteCat}>DELETE</button>
            <button onClick={updateCat}>UPDATE</button>
        </div>
    );
};

export {Cat};
