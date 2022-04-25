import {useDispatch, useSelector} from "react-redux";
import {catsActions} from "../../redux";

import {Cat} from "./Cat";

const Cats = () => {
    const {cats} = useSelector(state => state.cats);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        const catName = event.target.cat.value;
        dispatch(catsActions.add({catName}));
        event.target.cat.value = '';
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder={'Cat name'} name={'cat'}/>
                <button>SEND</button>
            </form>

            {cats.map((cat) => <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export {Cats};
