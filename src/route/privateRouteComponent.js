import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


class PrivateRoute extends React.Component {
  render(){
    let {Component} =  this.props ;
    return <Route render={props => ( this.props.loginDetalis.isLoginSucceed ? (<Component/>) : (<Redirect to={{pathname: '/login',state: { from: this.props.location }}}/>))}/>
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      loginDetalis : state.loginDetails
    };
  };
  
  export default connect(mapStateToProps)(PrivateRoute);