
// Displays all tasks
// each task displays  Room/Task Description/Frequency per week

import React, { Component } from 'react'
import Task from '../components/Task'
import AddTask from '../components/AddTask'

const tasksUrl = 'http://localhost:9393/tasks'
// create route for all tasks with url tasks

export default class TasksContainer extends Component {
    
    state = {
        tasks: []
    }
    //create fetch request for all tasks
    // for each task create task item
    componentDidMount() {
        const user_id = this.props.user_id
        fetch(`http://localhost:9393/users/${user_id}/tasks`)
            .then(response => response.json())
            .then(tasks => this.setState({tasks}))
    }

    displayTasks = () => {
        return this.state.tasks.map(task => {
            return <Task key={task.id} task={task} />})
    }

    render() {
        return (
            <div className="tasks-container">
                {this.displayTasks()}
                {/* <AddTask /> */}
            </div>
        )
    }
}
