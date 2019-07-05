import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

//STORE -> GLOBAL State

//Action Increament
const increment = () => {
    console.log("@@@@@@@");
    return {
        type: 'INCREAMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
//Reducer 
const counter = (state = 0, action) => {
    console.log("############");
    switch (action.type) {
        case "INCREAMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

//Dispatch 
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
