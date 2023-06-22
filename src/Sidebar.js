import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
function Sidebar() {
    const recentItem = (topic) =>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1658&q=80" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Rudresh Pandey</h2>
            <h4>rudreshpandey@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Connections</p>
                <p className='sidebar__statNumber'>123</p>
            </div>
            <div className='sidebar__stat'>
                
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('developer')}
            {recentItem('design')}
            {recentItem('software engineering')}
        </div>
    </div>
  )
}

export default Sidebar