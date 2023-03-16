import React from 'react'
import './Teams.css'
import Teamsbox from './Teamsbox'


function Teams(props) {
    return (
        <div className='teams-main-container'>
            <Teamsbox image={'/img/team-1.jpg'} name={'walter white'} role={'cook'}/>
            <Teamsbox image={'/img/team-1.jpg'} name={'walter white'} role={'cook'}/>
            <Teamsbox image={'/img/team-1.jpg'} name={'walter white'} role={'cook'}/>
            <Teamsbox image={'/img/team-1.jpg'} name={'walter white'} role={'cook'}/>
        </div>
    )
}

export default Teams