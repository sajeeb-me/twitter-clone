import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import  postReducer from './reducers/post'



const store = createStore( postReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
