// display household members / profiles

import React, { Component } from 'react'
import UserProfileCard from '../components/UserProfileCard'
import User from './User'
import AddTask from '../components/AddTask'

const usersUrl = 'http://localhost:9393/users'
// create route for all tasks with url tasks

export default class Users extends Component {
    state = {
        users: [],
        display: false,
        days: []
    }

    componentDidMount() {
        fetch(usersUrl)
            .then(response => response.json())
            .then(users => this.setState({ users }))

        fetch('http://localhost:9393/days')
            .then(response => response.json())
            .then(days => this.setState({days}))
    }

    displayUsers = () => {
        return this.state.users.map(user => {
           return (
            <UserProfileCard 
                selected={this.props.selected}
                history={this.props.history}
                key={user.id}
                user={user}
            />)
        })
    }
    
    handleClick = (event) => {
        this.setState({display: !this.state.display})
    }

    render() {
        return (
            <div class="users-container">
                <h1>My Household</h1>
                {!this.state.display &&  <button onClick={this.handleClick}>+ Add New Task</button>}
                {this.state.display && <AddTask key={this.state.users[0]}users={this.state.users} days={this.state.days} handleClick={this.handleClick}/>}
                <div class="container">
                {this.displayUsers()}
                </div>
            </div>
        )
    }
}

