import React, { Component } from 'react';

import Task from './Task.js';
import CastomLayout from "./CastomLayout";
import {Button} from "antd";
import SiderDemo from "./SiderDemo";
import WrappedHorizontalLoginForm from "./registerForm";
import { withTracker } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends Component {
    getTasks() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }



    render() {
        console.log(this.props);
        return (
            <div>
              {this.props.currentUser? <CastomLayout currentUser={this.props.currentUser}/>:
                <WrappedHorizontalLoginForm/>}
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    };
})(App);


