import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from "./components/app";

import reducer from "./reducer";

const store = createStore(reducer);

// иллюстрация работы bindActionCreators из redux
//
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     console.log(...args);
//     dispatch(creator(...args));
// }

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root'));



