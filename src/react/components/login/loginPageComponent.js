import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/actionsCreators/commonActionsCreators';

class LoginPage extends Component {

  login(event){
    
    let credentials = {
      username:this.refs.username.value,
      password:this.refs.password.value
    }
    
    if(this.refs.username.value == 'fadi'){
      this.props.login(credentials);
      this.props.history.replace('/');
    }else{
      alert('error');
    }
  }

  render() {
    return (
      <div className="login-page">
        <div className="title"> </div>
        <div className="login-form">
          <form onSubmit={this.login.bind(this)}>
            <label>
              Username: <input type="text" name="username" ref="username"/>
            </label>
            <label>
              Password: <input type="password" name="password" ref="password"/>
            </label>
            <input type="submit" value="Login" />
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
