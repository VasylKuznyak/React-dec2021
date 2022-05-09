import {useEffect} from "react";

const ChildComponent = ({sayHello}) => {

    useEffect(() => {
        console.log('Update Child Component');
    }, [sayHello])

    return (
        <div>
            <button onClick={sayHello}>Say</button>
        </div>
    );
};

export {ChildComponent};
