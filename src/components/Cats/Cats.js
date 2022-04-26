import {useSelector} from "react-redux";

import {Cat} from "./Cat";

const Cats = () => {
    const {cats} = useSelector(state => state.cats);

    return (
        <>
            {cats.map((cat) => <Cat key={cat.id} cat={cat}/>)}
        </>
    );
};

export {Cats};
