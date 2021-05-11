
// Displays all tasks
// each task displays  Room/Task Description/Frequency per week

import React, { Component } from 'react'
import Task from '../components/Task'
import AddTask from '../components/AddTask'

const tasksUrl = 'http://localhost:9393/tasks'
// create route for all tasks with url tasks

export default class Tasks extends Component {
    state = {
        tasks: []
    }
    //create fetch request for all tasks
    // for each task create task item
    componentDidMount() {
        fetch('http://localhost:9393/tasks')
            .then(response => response.json())
            .then(tasks => this.setState({tasks}))
    }
    displayTasks = () => {
        return this.state.tasks.map(task => {
            return <Task key={task.id} task={task} />})

    }

    render() {
        return (
            <div class="tasks-container">
                <h6>HHSHSHSHSH</h6>
                {this.displayTasks()}
                {/* <AddTask /> */}
            </div>
        )
    }
}
