// import { combineReducers, createStore } from 'redux';
import usersReducer from './Users-reducer';



// const store = createStore(reducers);

// export default store

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import middleware from "./middleweres/middlewere";

let reducers = combineReducers({
    usersPage:usersReducer
});


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(middleware);

export default store;