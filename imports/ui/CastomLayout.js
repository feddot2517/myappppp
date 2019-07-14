import React, {Component} from 'react';
import {Breadcrumb, Button, Icon, Input, Layout, Menu, Card} from 'antd';
import Message from "../models/message";
import {withTracker} from "meteor/react-meteor-data";


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',

  },

  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
  },
];

const data = [
  {
    name: "Name",
    message: "Message",
  },
  {
    name: 'Fed',
    message: 'How are you?',
  },
];


const {Header, Content, Footer} = Layout;


export default class CastomLayout extends Component {

  state = {
    userMessage: '',
  };

  handleLogOut = e => {
    Meteor.logout();
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
    console.log(this.props.messages);
    return (
      <Layout className="layout">
        <Header>
          <div style={{float: 'left', color: 'white'}}>
            Hello, {this.props.currentUser && this.props.currentUser.username}
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{lineHeight: '64px', float: 'right'}}
            onClick={this.handleLogOut}
          >
            <Menu.Item key="1">LogOut</Menu.Item>
          </Menu>

        </Header>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Chat</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{background: '#dfd', padding: 24, minHeight: 1000}}>


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


            {/*<Table columns={columns} dataSource={data} />*/}

              {this.props.messages && this.props.messages.map((message,id) => (
                <Card key={id}>
                  <div style={{color: message.color, display:'inline-block', marginRight: 10}}>{message.from}: </div>
                  <div style={{display:'inline-block'}}> {message.text}</div>
                </Card>
              ))}


          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Created FED and JEKKA</Footer>
      </Layout>
    )
  }
}



