import {useDispatch} from "react-redux";

import {catsActions} from "../../redux";

const Cat = ({cat: {id, name}}) => {
    const dispatch = useDispatch();

    const deleteById = () => {
        dispatch(catsActions.deleteById({id}));
    }

    return (
        <div>
            <h3>{id}. {name}</h3>
            <button onClick={deleteById}>DELETE</button>
        </div>
    );
};

export {Cat};
