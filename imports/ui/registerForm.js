import React, { Component } from 'react';

import { Form, Icon, Input, Button } from 'antd';

export default class AuthForm extends React.Component {

  state = {
    username: '',
    password: '',
  };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {

        return (
          <div>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              style={{ width: 300, marginRight: 10 }}
            />
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              style={{ width: 300, marginRight: 10 }}
            />
            <Button type="primary" >
              Log in
            </Button>
            <Button type="primary" style={{  marginLeft: 10 }} >
              Register
            </Button>
          </div>
        );
    }
}