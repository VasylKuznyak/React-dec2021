import {useDispatch, useSelector} from "react-redux";

import {counterActions} from "../redux/slices/counter.slice";

const Counter = () => {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(counterActions.incCount1())}>INCREMENT</button>
            <button onClick={() => dispatch(counterActions.decCount1())}>DECREMENT</button>
            <button onClick={() => dispatch(counterActions.reset())}>RESET</button>
            <button onClick={() => dispatch(counterActions.incCount2())}>INCREMENT 10</button>
            <button onClick={() => dispatch(counterActions.decCount2())}>DECREMENT 10</button>
        </div>
    );
};

export {Counter};
