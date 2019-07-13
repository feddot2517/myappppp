import React from 'react';

import {Button, Icon, Input} from 'antd';

export default class AuthForm extends React.Component {

  state = {
    username: '',
    password: '',
  };

  callback = ans => {

    alert(ans ? ans : "Success")

  };

  handleLogin = () => {
    const {username, password} = this.state;
    Meteor.loginWithPassword(username, password, this.callback)
  };
  handleRegister = () => {
    const {username, password} = this.state;
    Meteor.call('addUser', username, password, e => {
      if(e)
        this.callback(e);
      else
        Meteor.loginWithPassword(username, password, this.callback)
    });
  };

  render() {

    return (
      <div>
        <Input
          prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
          value={this.state.username}
          onChange={e => {
            this.setState({username: e.target.value})
          }}
          placeholder="Username"
          style={{width: 300, marginRight: 10}}
        />
        <Input
          prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => {
            this.setState({password: e.target.value})
          }}
          style={{width: 300, marginRight: 10}}
        />
        <Button type="primary" onClick={this.handleLogin}>
          Log in
        </Button>
        <Button type="primary" onClick={this.handleRegister} style={{marginLeft: 10}}>
          Register
        </Button>
      </div>
    );
  }
}