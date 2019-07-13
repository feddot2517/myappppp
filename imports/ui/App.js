import React, { Component } from 'react';

import Task from './Task.js';
import CastomLayout from "./CastomLayout";
import {Button} from "antd";
import SiderDemo from "./SiderDemo";
import WrappedHorizontalLoginForm from "./registerForm";


// App component - represents the whole app
export default class App extends Component {
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
        return (
            <div>
                <WrappedHorizontalLoginForm/>
            </div>
        );
    }
}


