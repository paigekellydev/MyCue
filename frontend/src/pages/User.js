// displays all tasks, tasks by day, add task
import React from 'react'
import TasksContainer from '../containers/TasksContainer'
import DaysContainer from '../containers/DaysContainer'
import Task from '../components/Task'

function User({user}) {

    return (
        <div className="profile-container">
            <h1>Cues for {user.name}</h1>
            <h1>All Tasks</h1>
            <TasksContainer user_id={user.id} />
            <h1>Tasks by Day</h1>
            <DaysContainer user_id={user.id} />
        </div>
    )
}

export default User
