import './App.css';

import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

const App = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
};

export default App;