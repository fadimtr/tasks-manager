import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers'; //go to index.js - the default
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateVariant(),thunk)
    );
}