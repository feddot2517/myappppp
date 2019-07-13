import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


export default class CastomLayout extends Component {
  handleLogOut = e => {
    Meteor.logout();
  };

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
          <div style={{ background: '#fff', padding: 24, minHeight: 1000 }}>


            {this.props.children}

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created FED and JEKKA</Footer>
      </Layout>
    )
  }
}


