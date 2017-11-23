import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/actionsCreators/commonActionsCreators';
import validate from '../../../services/database/userCredentialsValidator';

class LoginPage extends Component {

  login(event){
    
    let credentials = {
      username:this.refs.username.value,
      password:this.refs.password.value
    }
    var _this = this;
    
    validate(credentials).then(function(result){
      if(result){
        _this.props.login(credentials);
        _this.props.history.replace('/portal');
      }else{
        alert('wrong credentials!');
      }
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="title"> </div>
        <div className="login-form">
          <form>
            <label>
              Username: <input type="text" name="username" ref="username"/>
            </label>
            <label>
              Password: <input type="password" name="password" ref="password"/>
            </label>
            <input type="button" value="Login" onClick={this.login.bind(this)}/>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (credentials) => {
          dispatch(login(credentials));
      }
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
