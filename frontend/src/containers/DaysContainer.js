// Displays days of the week
// Each day displays Task description/ completed button

import React, { Component } from 'react'
import Day from '../components/Task'
import AddTask from '../components/AddTask'

const daysUrl = 'http://localhost:9393/tasks_by_day'
// create route for all tasks with url tasks

export default class Tasks extends Component {
    state = {
        days: []
    }
    //create fetch request for all tasks
    // for each task create task item

    displayTasks = () => {
        // fetch(tasksUrl)
        //     .then(response => response.json())
        //     .then(days => this.setState({days}))
        //     .then(this.state.days.map(task => {
        //         return <Task key={task.id} task={task} />
        //     }))
    }

    render() {
        return (
            <div>
                {this.displayTasks()}
                <AddTask />
            </div>
        )
    }
}
