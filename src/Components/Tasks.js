import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {

    // deleteTask = () => {

    // }

    render(){
        const { tasklist } = this.props;
        return(
            tasklist.map((task, index) => {
               return <Task key={ index } task={ task } />
            })
            
        )
    }


}