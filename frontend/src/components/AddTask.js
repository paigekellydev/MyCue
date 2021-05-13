// add new task, post request

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Multiselect } from 'multiselect-react-dropdown';


import React, { Component } from 'react'

export default class AddTask extends Component {

    state = {
        options: 
            [
                {day: 'Monday', id: 15},
                {day: 'Tuesday', id: 16},
                {day: 'Wednesday', id: 17},
                {day: 'Thursday', id: 18},
                {day: 'Friday', id: 19},
                {day: 'Saturday', id: 20},
                {day: 'Sunday', id: 21}
            ],
        frequency: 0,
        selectedDays: [],
        selectedUser: [],
        taskDescription: ""
    }

    handleDays = (event) => {
        this.setState({selectedDays: event, frequency: event.length})
        return this.onSelect
    }

    handleRemove = () => {
        return this.onRemove
    }

//     handleUsers = (event) => {
//         if (this.state.selectedUser.length > 1) {
//     alert('You may only select 1');
//   }
//   else {
//     this.setState({ selectedUser: event }) 
//   }
//         // this.setState({selectedUser: event})
//         // console.log(event)
//         // return this.onSelect
//     }

    renderUsers = () => {
        return this.props.users.map(user => {
            return <option value={user.id}>{user.name}</option>
        })
    }

    renderDays = () => {
        return <Multiselect
            options={this.state.options} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.handleDays} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="day" // Property name to display in the dropdown options
        />
    }

    handleTask = (event) => {
        this.setState({taskDescription: event.target.value})
    }

    renderFrequency = () => {
        return <Dropdown
            label="How many days per week?"
            options={this.state.frequency} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.handleOnSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="frequency" // Property name to display in the dropdown options
        />
    }
    render() {
        return (
            <div>
                <form>
                    <label>Task description</label>
                    <input type='text' onChange={this.handleTask}></input>
                    <label>What days of the week?</label>
                    {this.renderDays()}
                    {/* {this.renderUsers()} */}
                    <select>
                        {this.renderUsers()}
                    </select>
                    {/* <label>How many days per week?</label>
                        {this.renderFrequency()} */}
                    {/* <input type="integer"></input> */}
                </form>
            </div>
        )
    }
}
