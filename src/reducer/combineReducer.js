import { combineReducers, createStore } from "redux";
import { productReducer } from './productReducer'

export const combineReducer = combineReducers({productReducer})

export const store = createStore(combineReducer)