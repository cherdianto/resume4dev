import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux things
import rootReducer from './redux/reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { connect, Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
