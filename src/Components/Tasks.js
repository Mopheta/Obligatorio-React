import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {

    render(){
        const { tasklist, removeTask } = this.props;
        return(
            tasklist.map((task, index) => {
               return <Task key={ index } task={ task } removeTask={ removeTask }  />
            })
            
        )
    }


}