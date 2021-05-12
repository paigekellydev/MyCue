// display household members / profiles

import React, { Component } from 'react'
import User from './User'

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
           return <User key={user.id} user={user}/>
        })
    }
    render() {
        return (
            <div>
                {this.displayUsers()}
            </div>
        )
    }
}

