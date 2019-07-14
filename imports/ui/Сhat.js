import React, {Component} from 'react';

import {Button, Card, Icon, Input} from 'antd';

export default class Chat extends Component {

  state = {
    userMessage: '',
  };

  addNewMessage = e => {
    if (!this.props.currentUser)
      return;
    const {userMessage} = this.state;
    Meteor.call("addMessage", this.props.currentUser, userMessage);
    this.setState({userMessage: ''})
  };

  onChange = e => {
    this.setState({userMessage: e.target.value})
  };

  render() {
    return (
      <div style={{background: '#dfd', padding: 24, minHeight: 1000}}>
        <div>
          <Input
            prefix={<Icon type="message" style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="message"
            placeholder="Input your message here"
            value={this.state.userMessage}
            onPressEnter={this.addNewMessage}
            onChange={this.onChange}
            style={{width: 1000, marginRight: 10}}
          />

          <Button type="primary" onClick={this.addNewMessage} style={{float: 'mid', color: 'white'}}>
            Send message!
          </Button>
        </div>
        <div style={{marginTop: 10}}>
          {this.props.messages && this.props.messages.map((message, id) => (
            <Card key={id}>
              <div style={{
                color: 'blue',
                fontSize: 'x-small',
                display: 'inline-block',
                marginRight: 5
              }}>{message.createdAt.toLocaleTimeString()}:
              </div>
              <div style={{color: message.color, display: 'inline-block', marginRight: 10}}>{message.from}:</div>
              <div style={{display: 'inline-block'}}> {message.text}</div>
            </Card>
          ))}
        </div>
      </div>
    )
  }
}