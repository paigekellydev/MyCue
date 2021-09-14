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
    
    // displayTasks = () => {
    //     console.log(this.state.tasks)
        
    //     return this.state.tasks.map(task => {
    //         return <Task key={task.id} task={task} />})
    // }

    displayTasks = () => {
        const filteredTasks = this.state.tasks.filter(task => task.person_id === this.props.user_id)
        return filteredTasks.map(task => {
            return <li>{task.desciption}</li>})
    }

    render() {
        return (
            <div class="day">  
                <h1>{this.props.day.day_of_the_week}</h1>
                <ol>
                    {this.displayTasks()}
                </ol>
            </div>
        )
    }
}

