// Each day displays Task description/ completed button
import React, { Component } from 'react'
import Task from './Task'

export default class Day extends Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        const day_id = this.props.day.id
        fetch(`http://localhost:9393/days/${day_id}`)
            .then(response => response.json())
            .then(tasks => this.setState({tasks}))
    }

    displayTasks = () => {
        return this.state.tasks.map(task => {
            return <Task key={task.id} task={task} />})
    }

    render() {
        return (
            <div>  
                <h1>{this.props.day.day_of_the_week}</h1>
                {this.displayTasks()}
            </div>
        )
    }
}

