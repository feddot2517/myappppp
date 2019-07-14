import React, {Component} from 'react';

import CastomLayout from "./CastomLayout";
import WrappedHorizontalLoginForm from "./AuthForm";
import {withTracker} from 'meteor/react-meteor-data';
import Message from '../models/message';
import Chat from "./Сhat";

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.currentUser ?
          <CastomLayout
            currentUser={this.props.currentUser}
          >
            <Chat
              currentUser={this.props.currentUser}
              messages={this.props.messages}/>

          </CastomLayout> :
          <WrappedHorizontalLoginForm/>}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    messages: Message.find({},{ sort: { createdAt: -1 } }).fetch()
  };
})(App);


