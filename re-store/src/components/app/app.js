import React from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CardPage, HomePage} from "../pages";

const App = () => {

    return (
        <div className="container">
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/card' component={CardPage}/>
            </Switch>
        </div>
    )
}

export default App;
