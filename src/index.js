import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reducer from './store/reducers/reducer';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(reducer);

// middleware
const logger = store => {
    // next is a function to let the action continue on to the reducer
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            // next lets action continue to reducer
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
