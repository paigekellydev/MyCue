import React, { Component } from 'react'
import User from '../pages/User'
import { Link } from 'react-router';

export default class UserProfileCard extends Component {

    handleClick = (event) => {
        this.props.selected(this.props.user)
        this.props.history.push(`/user/${this.props.user.id}`)
    }

    render() {
        return (
            <div className="profiles" onClick={this.handleClick}>
                {/* <img src={this.props.image} /> */}
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}
