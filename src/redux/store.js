import {createStore, applyMiddleware} from "redux";
import promise from 'redux-promise';

export default applyMiddleware(promise)(createStore);
