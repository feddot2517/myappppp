import React, {Component} from 'react';
import {Breadcrumb,Layout, Menu} from 'antd';
import {withTracker} from "meteor/react-meteor-data";

const {Header, Content, Footer} = Layout;


export default class CastomLayout extends Component {


  handleLogOut = e => {
    Meteor.logout();
  };


  render() {
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

          {this.props.children}

        </Content>
        <Footer style={{textAlign: 'center'}}>Created FED and JEKKA</Footer>
      </Layout>
    )
  }
}



