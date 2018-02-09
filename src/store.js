import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


import result from './reducers/result';



export default createStore(combineReducers({result}), compose(applyMiddleware(promise(),thunk))
);
