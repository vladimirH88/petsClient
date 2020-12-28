import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk';

//@ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));