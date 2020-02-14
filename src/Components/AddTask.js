import React, { Component } from 'react';

export default class AddTask extends Component {

    state = {
        taskTitle: '',
    }
    
    onChangeFields = (event) => {
        this.setState({
            taskTitle: event.target.value       
        })      
    }

    onSubmitEvent = (event) => {
     event.preventDefault(); //Avoid the window refresh  
     const { taskTitle } = this.state; 
     const { addNewTask } = this.props;
     addNewTask(taskTitle);

    }

    render(){
        const { taskTitle } = this.state;
        return(
            <form onSubmit={ this.onSubmitEvent }> 
                <input type="text" placeholder="Enter a task title" value={ taskTitle } onChange={ this.onChangeFields } />
                <input type="submit" value="Add task" />
            </form>
        )
    }


}