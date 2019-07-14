import React, { Component } from 'react';
import {Layout, Menu, Breadcrumb, Button, Icon} from 'antd';
import { Input } from 'antd';
import { Table, Divider, Tag } from 'antd';
import Message from "../models/message";


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
        key: "1",
        name: "FED",
        message: "MESSAGE"
    },
    {
        key: "2",
        name: 'Jim Green',
        message: 'London No. 1 Lake Park',
    },
];


const { Header, Content, Footer } = Layout;
const { TextArea } = Input;



export default class CastomLayout extends Component {

    state = {
        userMessage: '',
    };

  handleLogOut = e => {
    Meteor.logout();
  };

  addnewMessage = e => {
      const {userMessage} = this.state;
      Meteor.call("addMessage", this.props.currentUser&&this.props.currentUser.username, userMessage);
      alert(userMessage);

  }

  render(){
    return(
      <Layout className="layout">
        <Header>
          <div style={{ float: 'left', color:'white' }}>
            Hello, {this.props.currentUser&&this.props.currentUser.username}
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
            onClick={this.handleLogOut}
          >
            <Menu.Item key="1">LogOut</Menu.Item>
          </Menu>

        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Chat</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#dfd', padding: 24, minHeight: 1000 }}>





              <Input
                  prefix={<Icon type="message" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  type="message"
                  placeholder="Input your message here"
                  value={this.state.userMessage}
                  onChange={e => {
                      this.setState({userMessage: e.target.value})
                  }}
                  style={{width: 1000, marginRight: 10}}
              />


              <Button type="primary" onClick={this.addnewMessage} style={{float:'mid', color: 'white'}}>
                  Send message!
              </Button>


              <Table columns={columns} dataSource={data} />



              {this.props.children}

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created FED and JEKKA</Footer>
      </Layout>
    )
  }
}


