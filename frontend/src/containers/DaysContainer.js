// Displays days of the week
// Each day displays Task description/ completed button

import React, { Component } from 'react'
import Task from '../components/Task'
import AddTask from '../components/AddTask'
import Day from '../components/Day'


const daysUrl = 'http://localhost:9393/tasks_by_day'
// create route for all tasks with url tasks

export default class DaysContainer extends Component {
    state = {
        days: []
    }
    //create fetch request for all tasks
    // for each task create task item

    componentDidMount() {
        fetch(`http://localhost:9393/days`)
            .then(response => response.json())
            .then(days => this.setState({days}))
        }
        
    displayTasks = () => {
        return this.state.days.map(day => {
            return <Day day={day} id={day.id} user_id={this.props.user_id}/>
        })
    }

    render() {
        return (
            <div className="container">
                {this.displayTasks()}
            </div>
        )
    }
}
