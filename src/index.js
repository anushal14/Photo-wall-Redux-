import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux';
import App from './Components/App';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
);

