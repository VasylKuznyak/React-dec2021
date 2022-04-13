import React, {useState} from 'react';

import {CarsComponent, FormComponent} from "./components";

const App = () => {
    const [createdCar, setCreatedCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <div>
            <FormComponent setCreatedCar={setCreatedCar} updatedCar={updatedCar}/>
            <CarsComponent createdCar={createdCar} setUpdatedCar={setUpdatedCar}/>
        </div>
    );
};

export default App;