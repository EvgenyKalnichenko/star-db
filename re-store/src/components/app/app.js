import React from 'react';
import './app.css';
import { withBookstoreService } from '../hoc';

const App = ({bookstoreService}) => {

    console.log(bookstoreService.getBooks());
    return (
        <div className="container">
            Hello world
        </div>
    )
}

export default withBookstoreService()(App);
