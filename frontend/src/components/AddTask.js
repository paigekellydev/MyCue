// add new task, post request

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Multiselect } from 'multiselect-react-dropdown';
import React, { Component } from 'react'

const tasksUrl = 'http://localhost:9393/all_tasks'
const dayTasksUrl = 'http://localhost:9393/dt'

export default class AddTask extends Component {
    
    state = {
        options: this.props.days,
        frequency: 0,
        selectedDays: [],
        selectedUserId: 5,
        taskDescription: "",
        taskId: null
    }

    componentDidMount() {
        const everyDay = {"day_of_the_week": "Everyday", id: 0}
        this.setState({options:[...this.state.options, everyDay]})
    }
    
    handleDays = (event) => {
        console.log(event[0].id)
        if (event[0].id === 0) {
            this.setState(
                {
                    selectedDays: this.props.days,
                    frequency: 7
                })
        } else {
            this.setState({selectedDays: event, frequency: event.length})
        }
    }
    
    handleRemove = (event) => {
        this.setState({selectedDays: this.state.selectedDays, frequency: this.state.selectedDays.length})
    }

    renderUsers = () => {
        return this.props.users.map(user => {
            return <option value={user.id}>{user.name}</option>
        })
    }

    renderDays = () => {
        return (
            <Multiselect
                options={this.state.options} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.handleDays} // Function will trigger on select event
                onRemove={this.handleRemove} // Function will trigger on remove event
                displayValue="day_of_the_week" // Property name to display in the dropdown options
                placeholder="Select day(s)"
            />
        )
    }

    handleTask = (event) => {
        this.setState({taskDescription: event.target.value})
    }

    handleUser = (event) => {
        this.setState({ selectedUserId: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleClick(event)
        
        fetch(tasksUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                desciption: this.state.taskDescription,
                frequency_per_week: this.state.frequency,
                person_id: this.state.selectedUserId
            })
        })
        // fetch(dayTasksUrl, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         day_id: this.state.taskDescription,
        //         task_id: this.state.frequency,
        //         person_id: this.state.selectedUserId
        //     })
        // })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} class="add-task">
                    <label class="form-name">New Task Form</label><br></br>
                    <label>Task:</label>
                    <input class="task-input" placeholder="Enter task description" type='text' onChange={this.handleTask}></input> <br></br>
                    <label>Schedule Task Days:</label>
                    {this.renderDays()}
                    {/* {this.renderUsers()} */}
                    <label>Assign Task to a Person:</label>
                    <select placeholder="Assign task"  value={this.state.value} onChange={this.handleUser}>
                        {this.renderUsers()}
                    </select> <br></br>
                    {/* <label>How many days per week?</label>
                        {this.renderFrequency()} */}
                    <input class="button"type="submit"></input>
                </form>
            </div>
        )
    }
}
