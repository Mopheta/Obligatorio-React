import React, { Component } from 'react';

//Components
import Tasks from './Tasks'
import AddTask from './AddTask'
//formik
export default class TaskMenu extends Component{
    constructor(props){
        super(props);

        this.state = {
            tasklist: [
                {id: 0, title: "Task number 1", done: false},
                {id: 1, title: "Task number 2", done: false},
                {id: 2, title: "Task number 3", done: false},
                {id: 3, title: "Task number 4", done: false},
                {id: 4, title: "Task number 5", done: false},
            ]
        }
    }

    addNewTask = (newTask) => {
        const { tasklist } = this.state;
        const nTask = {
            id: tasklist.length,
            title: newTask
        }
        this.setState({
            tasklist: [...tasklist, nTask]
        })
    }

    removeTask = (taskId) => {
        const { tasklist } = this.state;

        this.setState({
           tasklist: tasklist.filter(e => e.id !== taskId)  
        })
    }

    render(){

        const { tasklist } = this.state
        
        return(
            <div>
                <AddTask addNewTask={ this.addNewTask }/>
                {
                    tasklist.length > 0 ?
                    <Tasks tasklist={ tasklist } removeTask = { this.removeTask } />
                    : <p>Tas atomizando pariente, tomatela</p>
                }
                
            </div>
        )
    }

}