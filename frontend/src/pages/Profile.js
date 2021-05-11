// displays all tasks, tasks by day, add task
import React from 'react'
import Tasks from '../containers/TasksContainer'
import Days from '../containers/DaysContainer'

function Profile({profile}) {
    return (
        <div className="profile-container">
            <h1>Cues for {profile.name}</h1>
            <h1>All Tasks</h1>
            <Tasks />
            <h1>Tasks by Day</h1>
            <Days />
        </div>
    )
}

export default Profile
