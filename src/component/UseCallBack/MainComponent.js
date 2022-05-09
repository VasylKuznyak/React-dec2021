import {useCallback, useState} from "react";

import {ChildComponent} from "./ChildComponent";

const MainComponent = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const sayHello = useCallback(() => {
        console.log('hello');
    }, [count2]);

    return (
        <div>
            <h1>count1:{count1}</h1>
            <h1>count2:{count2}</h1>
            <ChildComponent sayHello={sayHello}/>
            <button onClick={() => setCount1(prevState => prevState + 1)}>Counter 1</button>
            <button onClick={() => setCount2(prevState => prevState + 1)}>Counter 2</button>
        </div>
    );
};

export {MainComponent};
