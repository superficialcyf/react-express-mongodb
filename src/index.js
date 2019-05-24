import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import MainPage from './App';
import {reducer} from './redux/reducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);
ReactDOM.render(
            <Provider store={store}>
                <MainPage />
            </Provider>, 
            document.getElementById('root'));
serviceWorker.unregister();