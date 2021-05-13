// displays all tasks, tasks by day, add task
import TasksContainer from '../containers/TasksContainer'
import DaysContainer from '../containers/DaysContainer'
import Task from '../components/Task'

import React, { Component } from 'react'

export default class User extends Component {

    state = {
        days: [],
        tasks:[]    
    }

    // componentDidMount() {
    //     fetch('http://localhost:9393/days')
    //         .then(response => response.json())
    //         .then(days => this.setState({days}))
    // }

    // componentDidMount() {
    //     if (!this.props.user) {
    //     const user_id = this.props.user.id
    //     console.log(user_id)
    //     fetch(`http://localhost:9393/users/${user_id}/tasks`)
    //         .then(response => response.json())
    //         .then(tasks => this.setState({tasks}))
    // }
    //     }
    

    render() {
        return (
            <div>
                {/* <h1>Cues for {user.name}</h1> */}
                <h1>Tasks by Day</h1>
                <DaysContainer user_id={this.props.user.id} />
                <h1>All Tasks</h1>
                <TasksContainer user_id={this.props.user.id} />
            </div>
        )
    }
}
