import {useMemo, useState} from "react";

const sumator = (n) => {
    console.log('start');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += n;
    }
    console.log('finish');
    return sum;
}

const UseMemo = () => {
    const [counter, setCounter] = useState(0);
    const [n, setN] = useState(5);

    const number = useMemo(() => sumator(n), [n]);
    
    return (
        <div>
            <h1>sum: {number}</h1>
            <h1>counter: {counter}</h1>
            <button onClick={() => setN(prevState => prevState + 1)}>Increment N</button>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Increment Count</button>
        </div>
    );
};

export {UseMemo};
