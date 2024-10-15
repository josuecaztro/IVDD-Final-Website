import React from 'react';
import './adminDashboard.css';
import MessageList from '../Messages/MessageList';
import PRList from '../PRs/PRList';



function DisplayAdminDashboard (){
    return (
        <div id="dashboard-pg">
            <br/>
        <h1 id="dash-board-title">Admin Dashboard</h1>
        <div id="lists-dashboard">
        <MessageList/>
        <PRList/>
        </div>
        </div>
    )
}

export default DisplayAdminDashboard;