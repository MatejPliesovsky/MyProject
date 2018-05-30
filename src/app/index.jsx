import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
// import { Provider } from 'react-redux';
//
// import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
// import { sessionService, sessionReducer } from 'redux-react-session';
// import thunkMiddleware from 'redux-thunk';
//
// const reducer = combineReducers({
//   session: sessionReducer
// });
//
// const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));
// sessionService.initSessionService(store);
render(
  <App />, document.getElementById('app')
);
