import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import { database } from './database/config';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
);

