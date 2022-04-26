import {useSelector} from "react-redux";

import {Dog} from "./Dog";

const Dogs = () => {
    const {dogs} = useSelector(state => state.dogs);

    return (
        <>
            {dogs.map((dog) => <Dog key={dog.id} dog={dog}/>)}
        </>
    );
};

export {Dogs};
