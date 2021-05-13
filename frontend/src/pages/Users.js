// display household members / profiles

import React, { Component } from 'react'
import UserProfileCard from '../components/UserProfileCard'
import User from './User'
import AddTask from '../components/AddTask'

const usersUrl = 'http://localhost:9393/users'
// create route for all tasks with url tasks

export default class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch(usersUrl)
            .then(response => response.json())
            .then(users => this.setState({ users }))
    }

    displayUsers = () => {
        return this.state.users.map(user => {
           return (
            <UserProfileCard 
                selected={this.props.selected}
                history={this.props.history}
                key={user.id} user={user}
            />)
        })
    }

    render() {
        return (
            <div>
                <AddTask users={this.state.users}/>
                {this.displayUsers()}
            </div>
        )
    }
}

