import {useState} from "react";

import {Form, PostsComponent} from "./components";

const App = () => {
    const [idForm, setIdForm] = useState(null);

    return (
        <div>
            <Form setIdForm={setIdForm}/>
            <PostsComponent key={idForm} idForm={idForm}/>
        </div>
    );
};

export default App;