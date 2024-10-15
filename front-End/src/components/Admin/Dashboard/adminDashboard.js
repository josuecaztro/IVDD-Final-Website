import React from 'react';
import './adminDashboard.css';
import MessageList from '../Messages/MessageList';


function DisplayAdminDashboard (){
    return (
        <div id="dashboard-pg">
            <br/>
        <h1>Admin Dashboard</h1>
        <MessageList/>
        </div>
    )
}

export default DisplayAdminDashboard;