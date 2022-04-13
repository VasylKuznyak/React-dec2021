import React, {useState} from 'react';

import {CarsComponent, FormComponent} from "./components";

const App = () => {
    const [createdCar, setCreatedCar] = useState(null);

    return (
        <div>
            <FormComponent setCreatedCar={setCreatedCar}/>
            <CarsComponent createdCar={createdCar}/>
        </div>
    );
};

export default App;