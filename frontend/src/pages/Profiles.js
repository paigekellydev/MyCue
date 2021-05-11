// display household members / profiles

import React, { Component } from 'react'
import User from './User'

const UsersUrl = 'http://localhost:9393/Users'
// create route for all tasks with url tasks

export default class Users extends Component {
    state = {
        users: []
    }

    displayUsers = () => {
        fetch(UsersUrl)
            .then(response => response.json())
            .then(users => this.setState({users}))
            .then(this.state.Users.map(user => {
                <User key={user.id} User={Uuser}/>
            }))
    }
    render() {
        return (
            <div>
                {this.displayUsers()}
            </div>
        )
    }
}

