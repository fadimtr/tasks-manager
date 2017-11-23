import * as actions from '../actions/commonActions';

export function login(loginForm) {
    return { 
        type: actions.LOGIN, 
        payload:{
            username:loginForm.username,
            isLoginSucceed:true
        } 
    };
}