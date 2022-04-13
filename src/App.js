import React, {useState} from 'react';

import {CarsComponent, FormComponent} from "./components";

const App = () => {
    const [createdCar, setCreatedCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);
    const [carAfterUpdate, setCarAfterUpdate] = useState(null);

    return (
        <div>
            <FormComponent setCreatedCar={setCreatedCar} updatedCar={updatedCar} setCarAfterUpdate={setCarAfterUpdate}/>
            <CarsComponent createdCar={createdCar} setUpdatedCar={setUpdatedCar} carAfterUpdate={carAfterUpdate}/>
        </div>
    );
};

export default App;