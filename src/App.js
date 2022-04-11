import {useState} from "react";

import {CarsComponent, FormComponent} from "./components";

const App = () => {
    const [newCar, setNewCar] = useState([]);

    return (
        <div>
            <FormComponent setNewCar={setNewCar}/>
            <CarsComponent newCar={newCar}/>
        </div>
    );
};

export default App;