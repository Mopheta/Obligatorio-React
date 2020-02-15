import React, { Component } from 'react';
import '../Styles/task.scss';

export default class AddTask extends Component {

    state = {
        taskTitle: '',
        id: 0
    }
    
    onChangeFields = (event) => {
        this.setState({
            taskTitle: event.target.value,     
        })      
    }

    onSubmitEvent = (event) => {
     event.preventDefault(); //Avoid the window refresh  
     const { id, taskTitle } = this.state; 
     const { addNewTask } = this.props;

     addNewTask(id,taskTitle);
     
     this.setState({
         taskTitle: "",
         id: id + 1  
     })

    }

    render(){
        const { taskTitle } = this.state;
        return(
            <form onSubmit={ this.onSubmitEvent }> 
                <input type="text" class="taskInput" placeholder="Enter a task title.." value={ taskTitle } onChange={ this.onChangeFields } required/>
                <input type="submit" value="Add task" className="task"/>
            </form>
        )
    }


}