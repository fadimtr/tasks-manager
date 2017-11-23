import {combineReducers} from 'redux';
import *  as actions from '../actions/commonActions';

function loginReducer(state = {isLoginSucceed:false}, action){
    switch (action.type) {
      case actions.LOGIN:
        return action.payload;
      default:
        return state;
    }
}


  const rootReducer = combineReducers({
        loginDetails: loginReducer    
    });
    
  export default rootReducer;