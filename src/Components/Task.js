import React, { Component } from 'react';
import '../Styles/task.css';

export default class Task extends Component {

    render(){
        const { task, removeTask } = this.props;
        return(
            <div>
                { task.id } - { task.title }
                <input type="button" value="Remove" onClick={ () => removeTask(task.id) } className="task"/>

            </div> 
        )
    }


}