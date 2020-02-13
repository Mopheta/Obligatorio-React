import React, { Component } from 'react';

export default class Task extends Component {

    render(){
        const {task} = this.props;
        return(
            <div>
                { task.id } - { task.title }
                <input type="button" value="Remove" />

            </div> 
        )
    }


}